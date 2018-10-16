Teste- AMMO Varejo

dependências:
    - nodeJs, npm, mongodb

Instruções para execução:
   - abrir a pasta ui: npm install && npm run dev
   - abrir a pasta api: npm install && npm run dev

Após isso, a aplicação deverá subir no localhost:8081
assim aparecerá sem nenhum dado salvo, para adicionar indico o Postman:
    Com o método POST, link da api: localhost:3000/api/list
    marque a opção x-www-form-urlencoded
    add os campos: name, description, type, oldPrice e newPrice: como desejar

