FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js
COPY robots.txt /usr/share/nginx/html/robots.txt
COPY sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY og-image.svg /usr/share/nginx/html/og-image.svg
COPY favicon.svg /usr/share/nginx/html/favicon.svg
COPY Carolina_Villegas_CV_ES.docx /usr/share/nginx/html/Carolina_Villegas_CV_ES.docx
COPY Carolina_Villegas_CV_ES.pdf /usr/share/nginx/html/Carolina_Villegas_CV_ES.pdf
COPY Carolina_Villegas_CV_EN.docx /usr/share/nginx/html/Carolina_Villegas_CV_EN.docx
COPY Carolina_Villegas_CV_EN.pdf /usr/share/nginx/html/Carolina_Villegas_CV_EN.pdf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
