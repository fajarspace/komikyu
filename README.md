# Santoryu Manga reader

### Rest-API Docs
[Click this](https://github.com/KatowProject/manga-reader/blob/master/rest-api/README.md)

# Rest-API Documentation
## Path
```
http://localhost:4873/api
```
## Account
### **Auth**
```
METHOD: POST
PATH: /account/login
BODY: {
        username: 'username',
        password: 'password'
      }
```
## **Favorite**
```
METHOD: POST
PATH: /account/favorit
BODY: {
        username: 'username',
        method: '[add/remove/list]', //add, remove, list
        favorites: [data]
      }
```

## KomikIndo
### **Status**
```
/komikindo/api
```

### **Home Page**
```
/komikindo/api/home
```
> http://santoryu.herokuapp.com/komikindo/api/home/

### **Daftar Komik**
```
/komikindo/api/daftar-komik/page/<pagination>
```
> http://santoryu.herokuapp.com/komikindo/api/daftar-komik/page/1/

### **Komik Terbaru**
```
/komikindo/api/komik-terbaru/page/<pagination>
```
> http://santoryu.herokuapp.com/komikindo/api/komik-terbaru/page/1/

### **Komik Filter [Manga/Manhua/Manhwa]**
```
/komikindo/api/komik/<type>/page/<pagination>
```
> http://santoryu.herokuapp.com/komikindo/api/manga/page/1/

### **Search Komik**
```
/komikindo/api/cari/<query>/page/1
```
> http://santoryu.herokuapp.com/komikindo/api/cari/kanojo/page/1/

### **Komik Detail**
```
/komikindo/api/komik/<endpoint>
```
> http://santoryu.herokuapp.com/komikindo/api/komik/ice-cream-kanojo/

### **Komik Chapter**
```
/komikindo/api/chapter/<endpoint>
```
> http://santoryu.herokuapp.com/komikindo/api/chapter/ice-cream-kanojo-chapter-1/

