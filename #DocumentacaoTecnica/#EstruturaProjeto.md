
# CRIAÇÃO DO PROJETO:
npm create vite@latest . -- --template react
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install firebase

# SUBIR APLICAÇÃO PARA O GITHUB
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AvellDesenvolvimento/Expert_Start_On.git
git push -u origin main


# COMANDO PARA UPAR NO GITHUB SEMPRE:
para rodar a plicação tem que buildar!:
npm run build
git add .
git status
git commit -m "Update projeto Login"
git push origin main

ou:   git push
