#Clear clients

For deleted users (only were created manually) with ended subscribe need add this command to cron
`0 1 * * * /usr/bin/php /var/www/turbulence-backend/artisan users:clear >> /dev/null`