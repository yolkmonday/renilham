export interface Env {
  renilham_db: D1Database
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const { pathname, method } = url as unknown as { pathname: string; method: string }
    const m = request.method

    // CORS preflight
    if (m === 'OPTIONS') return new Response(null, { headers: corsHeaders })

    // ── Wishes ──────────────────────────────────────────────────────────────
    if (pathname === '/wishes' && m === 'GET') {
      const { results } = await env.renilham_db
        .prepare('SELECT id, name, message, created_at FROM wishes ORDER BY created_at DESC LIMIT 100')
        .all()
      return json(results)
    }

    if (pathname === '/wishes' && m === 'POST') {
      const body = await request.json<{ name: string; message: string }>()
      if (!body.name?.trim() || !body.message?.trim()) {
        return json({ error: 'name dan message wajib diisi' }, 400)
      }
      await env.renilham_db
        .prepare('INSERT INTO wishes (name, message) VALUES (?, ?)')
        .bind(body.name.trim().slice(0, 100), body.message.trim().slice(0, 500))
        .run()
      return json({ ok: true }, 201)
    }

    // ── RSVP ────────────────────────────────────────────────────────────────
    if (pathname === '/rsvp' && m === 'GET') {
      const { results } = await env.renilham_db
        .prepare('SELECT id, name, attendance, guest_count, created_at FROM rsvp ORDER BY created_at DESC LIMIT 200')
        .all()
      const hadir = (results as { attendance: string }[]).filter(r => r.attendance === 'hadir').length
      const tidak = results.length - hadir
      return json({ total: results.length, hadir, tidak_hadir: tidak, data: results })
    }

    if (pathname === '/rsvp' && m === 'POST') {
      const body = await request.json<{ name: string; attendance: string; guest_count?: number }>()
      if (!body.name?.trim() || !['hadir', 'tidak_hadir'].includes(body.attendance)) {
        return json({ error: 'name dan attendance (hadir/tidak_hadir) wajib diisi' }, 400)
      }
      const count = Math.min(Math.max(Number(body.guest_count) || 1, 1), 20)
      await env.renilham_db
        .prepare('INSERT INTO rsvp (name, attendance, guest_count) VALUES (?, ?, ?)')
        .bind(body.name.trim().slice(0, 100), body.attendance, count)
        .run()
      return json({ ok: true }, 201)
    }

    return json({ error: 'not found' }, 404)
  },
}
