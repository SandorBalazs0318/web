const coursesUrl = "https://vvri.pythonanywhere.com/api/courses";
const studentsUrl = "https://vvri.pythonanywhere.com/api/students";
const coursesContainer = document.getElementById('courses');
const addCourseForm = document.getElementById('addCourseForm');
const assignStudentForm = document.getElementById('assignStudentForm');
const courseSelect = document.getElementById('courseSelect');

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const kurzusnev = document.getElementById('kurzusnev').value;

    try{
        const response = await fetch(coursesUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: kurzusnev
        })
    })
    const data = await response.json()
      fetchCourses();
      addCourseForm.reset();
    }

    catch(error) {
      console.error('Hiba történt a kurzus hozzáadása közben:', error);
    };
}

async function fetchCourses() {
    try{
        const response = await fetch(coursesUrl)
            const data = await response.json()
            updateCourseSelect(data);
            coursesContainer.innerHTML = '';
            data.forEach(course => {
                const courseDiv = document.createElement('div');
                courseDiv.classList.add('course');
                courseDiv.innerHTML = `
                <h2>${course.name}</h2>
                <p><strong>ID:</strong> ${course.id}</p>
                <p><strong>Tanulók:</strong></p>
                <ul>
                    ${course.students.map(student => `<li>${student.name} (ID: ${student.id})</li>`).join('')}
                </ul>
                `;
                coursesContainer.appendChild(courseDiv);
            });
        }
        catch(error) {
        console.error('Hiba történt', error);
    };
}

function updateCourseSelect(courses) {
  courseSelect.innerHTML = '';
  courses.forEach(course => {
    const option = document.createElement('option');
    option.text = course.name;
    option.value = course.id;
    courseSelect.add(option);
  });
}

async function assignStudent(event) {
  event.preventDefault();
  
  const courseId = courseSelect.value;
  const studentName = document.getElementById('studentName').value;

  try{
    const response = await fetch(studentsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: studentName,
      course_id: courseId
    })
  })
  const data = await response.json()
    fetchCourses();
    console.log(assignStudentForm)
    assignStudentForm.reset();
  }
  catch(error){
    console.error('Hiba történt:', error);
  };
}


async function deleteStudentByName(event) {
  event.preventDefault();
  const deleteStudentName = document.getElementById('deleteStudentName').value;

  try{
    const response = await fetch(studentsUrl)
    const data = await response.json()
      const studentToDelete = data.find(student => student.name === deleteStudentName);
      if (!studentToDelete) {
        console.error('A megadott névvel nem található diák.');
        return;
      }
  } 
  catch(error) {
        console.error('Hiba történt:', error);
    };
  try{
      const response = await fetch(`${studentsUrl}/${studentToDelete.id}`, {
        method: 'DELETE'
      })
        if (response.ok) {
          fetchCourses();
          document.getElementById('deleteStudentByNameForm').reset();
        } else {
          throw new Error('Hiba történt amikor a diákokat töröltük.');
        }
    }
    catch(error) {
      console.error('Hiba történt amikor a diákokat töröltük.', error);
    };
}
//Törlés
const deleteStudentByNameForm = document.getElementById('deleteStudentForm');
deleteStudentByNameForm.addEventListener('submit', deleteStudentByName);

addCourseForm.addEventListener('submit', handleFormSubmit);
assignStudentForm.addEventListener('submit', assignStudent);

//Oldal betöltése
fetchCourses();
