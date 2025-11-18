---
pubDatetime: 2025-11-17
title: API Errors on Homepage Dashboard
slug: api-errors-on-homepage-dashboard
draft: false
tags:
  - gethomepage
  - adguard-home
  - pihole
---

## Issue

When using the Homepage Dashboard Tidbit with either AdGuard Home or Pi-hole, you may encounter API errors if you are relying on urls that require DNS lookups.

## Solution

To resolve this issue, you will need to disable rate-limiting on your DNS server for local requests. This will allow the Homepage Dashboard to successfully query the API without being blocked.

For example, in AdGuard Home, you can disable rate-limiting by navigating to the "Settings" tab, then selecting "DNS Settings". From there, you can uncheck the "Enable Rate Limiting" option:

<Image
  src="/tidbits/api-errors-on-homepage-dashboard/rate-limiting.png"
  width="750"
  height="465"
  className="mx-auto rounded-lg"
/>

Alternatively, you can add your homepage dashboard's server IP address to the whitelist for rate-limiting.

Thanks to /u/TerminalFoo for the solution in [this reddit comment](https://www.reddit.com/r/selfhosted/comments/1fc00ua/homepage_takes_ages_to_start/lswfw8k/).
