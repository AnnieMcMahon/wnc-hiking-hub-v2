const appUsers = typeof window !== 'undefined' && localStorage.getItem('appUsers')
  ? JSON.parse(localStorage.getItem('appUsers'))
  : [
  {
    id: 0,
    email: "demo@gmail.com",
    password: "1234",
    name: "Demo User",
    avatar: "/newUser.png",
    bio: "Bio text goes here ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reprehenderit assumenda quibusdam iste eos exercitationem molestias nulla fuga repellat incidunt ullam cupiditate necessitatibus quidem debitis dolorum nesciunt labore quos, laboriosam tempora qui tempore quo velit! Libero quod eligendi at eum.",
    hikes: []
  }
];

export default appUsers;