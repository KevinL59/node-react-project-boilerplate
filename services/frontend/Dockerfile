FROM nginx

COPY ./dist /var/www/dist/

COPY ./index.html /var/www/index.html

COPY server.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
