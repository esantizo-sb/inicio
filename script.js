const classData = [
  {
    grade: '3ro B',
    code: 'UFHRDM',
    joinLink: 'https://frm.tv/join/UFHRDM'
  },
  {
    grade: '3ro A',
    code: 'MVQUE4',
    joinLink: 'https://frm.tv/join/MVQUE4'
  },
  {
    grade: '4to A',
    code: 'PC5CGF',
    joinLink: 'https://frm.tv/join/PC5CGF'
  },
  {
    grade: '4to B',
    code: '6HKH4B',
    joinLink: 'https://frm.tv/join/6HKH4B'
  },
  {
    grade: '5to A',
    code: 'V5L558',
    joinLink: 'https://frm.tv/join/V5L558'
  },
  {
    grade: '5to B',
    code: 'N8LTER',
    joinLink: 'https://frm.tv/join/N8LTER'
  },
  {
    grade: '6to A',
    code: 'HT3SZE',
    joinLink: 'https://frm.tv/join/HT3SZE'
  },
  {
    grade: '6to B',
    code: 'NLNAD9',
    joinLink: 'https://frm.tv/join/NLNAD9'
  },
  {
    grade: '7mo A',
    code: 'VJMD4Q',
    joinLink: 'https://frm.tv/join/VJMD4Q'
  },
  {
    grade: '7mo B',
    code: '32RZGH',
    joinLink: 'https://frm.tv/join/32RZGH'
  },
  {
    grade: 'Escuelita 4to',
    code: 'JBUY49',
    joinLink: 'https://frm.tv/join/JBUY49'
  },
  {
    grade: 'Escuelita 5to',
    code: 'H989YB',
    joinLink: 'https://frm.tv/join/H989YB'
  },
  {
    grade: 'Escuelita 6to',
    code: 'TTVDQX',
    joinLink: 'https://frm.tv/join/TTVDQX'
  }
];

const computerClasses = [
  {
    grade: '3th A - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc3NjQyNDc2?cjc=mi46jyt'
  },
  {
    grade: '3th B - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc4MTc3NTAy?cjc=37kixqv'
  },
  {
    grade: '4th A - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc4NDQyODE3?cjc=nvilo7w'
  },
  {
    grade: '4th B - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc3NTI1NjI0?cjc=qyvabdh'
  },
  {
    grade: '5th A - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc3Mjc0NzAw?cjc=2bkh7tt'
  },
  {
    grade: '5th B - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc4NDU2MTQx?cjc=pwwdlhf'
  },
  {
    grade: '6th A - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc3MTMzNzA0?cjc=qo72kvq'
  },
  {
    grade: '6th B - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc3ODg5ODI5?cjc=6ejc3p2'
  },
  {
    grade: '7th A - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc0Nzg0ODI5?cjc=aqsmsb3'
  },
  {
    grade: '7th B - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc2NDQ3OTQz?cjc=2r5r4h5'
  },
  {
    grade: '8th A - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc1NjY4OTUy?cjc=uy5nu6l'
  },
  {
    grade: '8th B - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc2MDQ3MzEy?cjc=cuvacm4'
  },
  {
    grade: '8th C - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc2MzM5ODA1?cjc=4rvhjmp'
  },
  {
    grade: '9th A - Computación',
    link: 'https://classroom.google.com/c/NzQ1MzczNTYzNzA1?cjc=hrxyltq'
  },
  {
    grade: '9th B - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc1ODc5MzE3?cjc=a4rovsv'
  },
  {
    grade: '10th A - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc1NDkyNDA0?cjc=msng6dp'
  },
  {
    grade: '10th B - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc2MTIxMzU3?cjc=3wifrgo'
  },
  {
    grade: '11th A - Computación',
    link: 'https://classroom.google.com/c/NzQ1Mzc2MTc1MDA3?cjc=2sxe2va'
  },
  {
    grade: '11th B - Computación',
    link: 'https://classroom.google.com/c/NzQ1MzU2MzMxNTk3?cjc=uzbeht6'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const classGrid = document.getElementById('classGrid');
  
  // Populate class cards
  classData.forEach(classInfo => {
    const card = document.createElement('div');
    card.className = 'class-card';
    card.innerHTML = `
      <h3>${classInfo.grade}</h3>
      <p>Código de inscripción:</p>
      <div class="code">${classInfo.code}</div>
      <a href="${classInfo.joinLink}" class="join-link">Unirse a la clase</a>
    `;
    classGrid.appendChild(card);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Mensaje enviado exitosamente!');
    contactForm.reset();
  });

  // Computer classes dropdown
  const computerSelect = document.getElementById('computerSelect');
  const goToClassBtn = document.getElementById('goToClassBtn');
  
  computerClasses.forEach(classInfo => {
    const option = document.createElement('option');
    option.value = classInfo.link;
    option.textContent = classInfo.grade;
    computerSelect.appendChild(option);
  });

  goToClassBtn.addEventListener('click', () => {
    const selectedValue = computerSelect.value;
    if (selectedValue) {
      window.open(selectedValue, '_blank');
    }
  });
});