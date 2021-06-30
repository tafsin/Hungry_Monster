document.getElementById("button-addon2").addEventListener("click", function() {
    const mealName = document.getElementById('inpt').value;
    //console.log(mealName);
    searchMeal(mealName);
  });


  function searchMeal(name) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(res => res.json())
      .then(data => {
         const mealarray = data.meals;
         displayMealName(mealarray);
         


          });
  }

  function displayMealName(mealsNameArray) {
      mealsNameArray.forEach(meal => {
        console.log(meal);
        var mealsDiv = document.getElementById('meal-container');
        var mealDiv = document.createElement('div');
        mealDiv.className = 'meal-Div';
        mealDiv.innerHTML=`
        <img onclick ="displayDetails('${meal.idMeal}')" src="${meal.strMealThumb}">
      
        <h2 onclick ="displayDetails('${meal.idMeal}')" class="meal-name">${meal.strMeal}</h2>
        
        `
        
      
        mealsDiv.appendChild(mealDiv);
      });
      
  }
  
    function displayDetails(id ,i) {
        document.getElementById('meal-container').style.display = "none";
        document.getElementById('search').style.display = "none";
        id = parseInt(id);
       const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
       console.log(url);
       fetch(url)
       .then(res => res.json())
       .then(data =>{
        console.log(data.meals[0]);
        const description = data.meals[0];
        displayIndg(description);
      }

        );
      
    }


    function displayIndg(des) {
        
        //console.log(des.strMeal);
        // var a = 'strIngredient'+1;
        // eval(a);
         //const ul = document.createElement('ul');
         var array = [];
         array.push(des.strIngredient1);
         array.push(des.strIngredient2);
         array.push(des.strIngredient3);
         array.push(des.strIngredient4);
         array.push(des.strIngredient5);
         array.push(des.strIngredient6);
         array.push(des.strIngredient7);
         array.push(des.strIngredient8);
         array.push(des.strIngredient9);
         array.push(des.strIngredient10);
         array.push(des.strIngredient11);
         array.push(des.strIngredient12);
         array.push(des.strIngredient13);
         array.push(des.strIngredient14);
         array.push(des.strIngredient15);
         array.push(des.strIngredient16);
         array.push(des.strIngredient17);
         array.push(des.strIngredient18);
         array.push(des.strIngredient19);
         array.push(des.strIngredient20);
         
         const ingredient = [];
         for (let i = 0; i < array.length; i++) {
           if(array[i] !==""){
            ingredient.push(array[i]);
            
           }
           
         }
         console.log(ingredient);
         const ul =document.createElement('ul');
         ingredient.forEach(element => {
          const li = document.createElement('li');
           li.innerHTML = element ;
           ul.appendChild(li);
         });
         
         
         
         
         

         let indDiv =  document.getElementById('detail');
         //var indDiv2 = document.createElement('div');

         indDiv.innerHTML =`
         <img src="${des.strMealThumb}">
         <h1>${des.strMeal}</h1>`
         indDiv.appendChild(ul);
     
      
    }





    
  
//  let c =1;
//  var a = "str";
//  var a = a+1;
//  console.log(a);
//  eval(a);





