const categories=['all', 'backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music'];
const colors=["all", "grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown" ];
const apiURL='https://pixabay.com/api/?key=26156012-7935c4847898e39ba3f45df31';
const cardsData=[
    {
        iconCard:'https://icon-library.com/images/goal-icon-png/goal-icon-png-15.jpg',
        titleCard: 'Mission',
        textCard: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
      },
      {
        iconCard:'https://icon-library.com/images/vision-icon/vision-icon-14.jpg',
        titleCard: 'Vision',
        textCard: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
      },
      {
        iconCard:'https://icon-library.com/images/history-icon-png/history-icon-png-2.jpg',
        titleCard: 'History',
        textCard: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
      }
];
const frontPagePortraitsIDs = [7754678, 7718952, 7760128]
export {categories, colors, apiURL, cardsData, frontPagePortraitsIDs};