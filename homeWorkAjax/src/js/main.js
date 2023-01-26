 // Картка персонажу https://rickandmortyapi.com/api/character?page=1
    // Серії https://rickandmortyapi.com/api/episode/2
    // https://rickandmortyapi.com/api/character/826`


    const urlApi = 'https://rickandmortyapi.com/api/character';
    const charContainer = document.querySelector('.movie__container')
    const selectSpecies = document.querySelector('.select-species')
    const selectStatus = document.querySelector('.select-status')
    const search = document.querySelector('.search');
    const pagination = document.querySelector('.pagination');

    fetch(urlApi)
        .then(data => data.json())
        .then(data => {
            showSortElement(data)
            createPagination(data)
        })
        .catch((err) => console.log("Error:", err));

    function showSortElement (data) {
        charContainer.innerHTML = ''
        selectSpecies.innerHTML = '<option value="all">all</option>';
        selectStatus.innerHTML = '<option value="all">all</option>';
        let charData = data.results;
        let selectedCharByStatus = [];
        let selectedCharBySpecies = [];
        charData.forEach((item) => {
            let newItem = createItem(item);
            charContainer.append(newItem);
            selectedCharBySpecies.push(item.species);
            selectedCharByStatus.push(item.status)
        })

        
        let selectItemBySpecies = Array.from(new Set(selectedCharBySpecies));
        selectItemBySpecies.forEach(item => {
            let option = document.createElement('option');
            option.setAttribute('value', item);
            option.innerText = item;
            selectSpecies.append(option)
        })

        let selectItemByStatus = Array.from(new Set(selectedCharByStatus));
        selectItemByStatus.forEach(item => {
            let option = document.createElement('option');
            option.setAttribute('value', item);
            option.innerText = item;
            selectStatus.append(option)
        })
        
        function searchInput(word, data) {
            return charData.filter(s => {
                const regex = new RegExp(word,'gi');
                return s.name.match(regex);
            })
        }

        function  displaySearch () {
            charContainer.innerHTML = '';
            const options = searchInput(this.value, charData);
            options.forEach(item => {
                let char = createItem(item)
                charContainer.append(char);
            })
        }
        search.addEventListener('keyup',displaySearch);
        selectSpecies.addEventListener('change', sortBySpecies)
        selectStatus.addEventListener('change', sortByStatus)

        function sortBySpecies() {
            charContainer.innerHTML = '';
            if (selectSpecies.value !== 'all') {
                charContainer.innerHTML = '';
                let charArr = charData.filter(e => e.species === selectSpecies.value);
                charArr.forEach(item => {
                    let char = createItem(item)
                    charContainer.append(char);
                })
            } else {
                charData.forEach((item) => {
                    let newItem = createItem(item);
                    charContainer.append(newItem);
                })
            }
        }
        function sortByStatus() {
            charContainer.innerHTML = '';
            if (selectStatus.value !== 'all') {
                charContainer.innerHTML = '';
                let charArr = charData.filter(e => e.status === selectStatus.value);
                charArr.forEach(item => {
                    let char = createItem(item)
                    charContainer.append(char);
                })
            } else {
                charData.forEach((item) => {
                    let newItem = createItem(item);
                    charContainer.append(newItem);
                })
            }
        }
    }
    
    function createItem(element) {
            //створюємо картку персонажу
            const cardItem = document.createElement("div");
            cardItem.classList.add('movie__item'); 
            //створюємо заголовок картки
            const name = document.createElement('h2') 
            name.classList.add('movie__name');
            name.innerHTML = element.name;
            //cmворюємо картинку і її оболочку
            const imageHolder = document.createElement('div');
            imageHolder.classList.add('movie__img-holder')
            const image = document.createElement('img')
            image.classList.add('movie__img');
            image.src = element.image;
            //cтворюємо стать персонажа 
            const gender = document.createElement('span');
            gender.classList.add('movie__gender');
            const iconGender = document.createElement('i')
            iconGender.classList.add('icon-male')
            gender.innerHTML = `Gender: <strong>${element.gender}</strong>`;
            if (element.gender === "Female") {
                iconGender.classList.remove('icon-male')
                iconGender.classList.add('icon-female')
            } else if (element.gender !== "Female"&& element.gender !== 'Male') {
                iconGender.classList.remove('icon-male')
                iconGender.classList.add('icon-question')
            }
            //створюємл статус персонала 
            const alive = document.createElement('span') 
            alive.classList.add('movie__alive');
            const iconAlive = document.createElement('i')
            iconAlive.classList.add('icon-heart')
            alive.innerHTML = `Status: <strong class="status">${element.status}</strong>`;
            if (element.status === 'Dead') {
                cardItem.classList.add('movie__item-dead');
                iconAlive.classList.add('icon-heart-o')
            } else if (element.gender !== "Dead"&& element.gender !== 'Alive') {
                iconAlive.classList.remove('icon-heart');
                iconAlive.classList.add('icon-question')
            }
            // cтворюємо з якого виду персонаж 
            const species = document.createElement('span');
            species.classList.add('movie__species');
            const iconSpecies = document.createElement('i')
            iconSpecies.classList.add('icon-reddit-alien')
            species.innerHTML =`Species: <strong>${element.species}</strong>`;
            if (element.species === 'Human') {
                iconSpecies.classList.remove('icon-reddit-alien')
                iconSpecies.classList.add('icon-user-secret')
            }
            // створюємо дату народження персонажа 
            const birthday = document.createElement('span')
            birthday.classList.add('movie__data');
            birthday.innerHTML = `Birthday: <strong>${element.created.slice(0,10)}</strong>`;
            const iconBirthday = document.createElement('i')
            iconBirthday.classList.add('icon-pencil-square')

            birthday.append(iconBirthday)
            species.append(iconSpecies)
            gender.append(iconGender)
            alive.append(iconAlive);
            imageHolder.append(image);
            cardItem.append(name,imageHolder,gender,alive,species,birthday);

            return cardItem;
       }

       
        

    function createPagination(data) {
        let ul = document.createElement('ul');
        ul.classList.add('pagination__list');
        
        for (let i = 1; i <= data.info.pages; i++) {
            let li = document.createElement('li');
            li.classList.add('pagination__item');
            li.value = i;
            li.innerHTML = `<span>${i}</span>`
            ul.appendChild(li);
            pagination.append(ul);
            li.addEventListener('click', e => {
                let listPage = document.querySelectorAll('.pagination__item');
                listPage.forEach(e => {
                    e.classList.remove('active');
                })
                li.classList.add('active');
                
                fetch(
                    `https://rickandmortyapi.com/api/character?page=${e.target.value}`
                  )
                    .then((data) => data.json())
                    .then((data) => showSortElement(data))
                    .catch((err) => console.log("Error:", err));
                });
                document.querySelectorAll('.pagination__item')[0].classList.add('active');
            }
            
        }