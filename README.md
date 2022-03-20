# Website Link: https://a-better-movie-search.netlify.app/
<hr/>
Practicing React js 
 The key point of this exercise are:
 
 1.create a react app
 
 <img width="253" alt="Screenshot 2022-03-20 at 00 27 17" src="https://user-images.githubusercontent.com/74420607/159142944-22089c6c-5e44-41f7-a50c-95d698dd1880.png">

2.useState and useEffect
  -1 (movies,setMovies) where we store the data retreived from the API,
  
  <img width="274" alt="Screenshot 2022-03-20 at 00 35 07" src="https://user-images.githubusercontent.com/74420607/159143109-ffefedcd-43b5-4ef5-9d75-065e280c0466.png">

<img width="366" alt="Screenshot 2022-03-20 at 00 35 29" src="https://user-images.githubusercontent.com/74420607/159143115-c036633e-feb3-4960-9222-dca4aa8cc7fe.png">

  
  
  -2(movieName,setMoviename) we set the value to be the 'movieName' by calling the setMovieName to be the value in the input text
  
<img width="233" alt="Screenshot 2022-03-20 at 00 36 21" src="https://user-images.githubusercontent.com/74420607/159143125-8fdec3bf-8ed2-4817-ad61-2bd1c399e458.png">


3. on the button we call the search movie function with the onclick function and after we reset the input text after the click  using an empty string

<img width="257" alt="Screenshot 2022-03-20 at 00 38 27" src="https://user-images.githubusercontent.com/74420607/159143166-78541239-54fa-4b3e-951b-972073929779.png">

 
4.we create  a conditional statement to show 2 different divs.
  -if there are contents show the div containing the movie if there are not movie available show a div with a message 'No movie found'
   
<img width="221" alt="Screenshot 2022-03-20 at 00 40 40" src="https://user-images.githubusercontent.com/74420607/159143208-8e3d20b9-1322-451c-980b-43dccdae6243.png">

5.IMPORTANT 
  -use the question mark to avoid error when element are not found on the api. Without using the question mark when  no element are founded will cause the website to crash,returning an empty page with no element
  
  <img width="198" alt="Screenshot 2022-03-20 at 00 45 59" src="https://user-images.githubusercontent.com/74420607/159143318-55b83019-c490-42b7-9155-eeecc2ca0b44.png">

  
  -here the definition of (optional chaining)
  
  <img width="309" alt="Screenshot 2022-03-20 at 00 46 47" src="https://user-images.githubusercontent.com/74420607/159143341-da3ff251-7d80-4507-9ace-677636e2f5cf.png">

6. Create component and pass data down as props

<img width="226" alt="Screenshot 2022-03-20 at 00 49 02" src="https://user-images.githubusercontent.com/74420607/159143394-03cc7ce1-e354-48eb-b461-862a26f8a70b.png">

7.Destructure the element from the Api down to the component

<img width="593" alt="Screenshot 2022-03-20 at 00 52 33" src="https://user-images.githubusercontent.com/74420607/159143447-1e8fb274-e9e7-4158-93dd-9fe9600ea871.png">



