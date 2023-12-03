---
draft: false
external: false
title: "Prisma with Supabase Connection Issue: Error: P1001"
description: "How to fix the Prisma Eror: P1001 when using Supabase"
date: 2022-12-03
---

If you  are encountering the error below with using Prisma with Supabase as the db:

**Error**: P1001: Can't reach database server at 'yourdb.supabase.co':'5432'

and you are 100% sure your Supabase DB service is up; then the most likely
cause is just a need to increase the connect_timeout. For some reason, prisma
quickly throws an error exemption even though it is able to connect to the db (as per the supabase dashboard).

To fix, update the **DIRECT_URL** and **DATABASE_URL** connection string to include connect_timeout=300.

e.g.

```properties
DIRECT_URL=postgres://u:p@db.supabase.co:5432/postgres?connect_timeout=300
DATABASE_URL=postgres://u.xy:p@db.supabase.co:5432/postgres?connect_timeout=300&pgbouncer=true
```

That should fix the issue both on your webapp or whenever you run prisma migrations. 
Ensure you add it on both DIRECT_URL and DATABASE_URL props.
