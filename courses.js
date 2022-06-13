const coursesArray = [];

//insert courses in array
for (let i = 1; i <= 18; i++) {
  const course = {
    id: i,
    image: `./images/course${i}.jpg`,
    title: `Course ${i}`,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae libero veritatis iure repudiandae temporibus!',
  };
  coursesArray.push(course);
}

//insert courses in courses page
const coursesSect = document.querySelector('.courses__container');

coursesArray.forEach((cours) => {
  const article = document.createElement('article');
  article.className = 'course';
  const artContent = `<div class="course__image">
  <img src="${cours.image}" />
</div>
<div class="course__info">
  <h4>${cours.title}</h4>
  <p>${cours.description}</p>
</div>
<a href="courses.html" class="btn btn-primary">Learn More</a>`;

  article.innerHTML = artContent;

  coursesSect.appendChild(article);
});
