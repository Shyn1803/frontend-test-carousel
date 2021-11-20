// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json(
    [
      {
        id: 1,
        imageUrl: 'https://vntoworld.com/wp-content/uploads/2021/08/bieu-tuong-dac-trung-cua-cac-nuoc-tren-the-gioi.jpg',
        property: ['Tháp Eiffel', 'item 3', 'item 3']
      },
      {
        id: 2,
        imageUrl: 'https://lh3.googleusercontent.com/proxy/eqmOmmMSxR_Fd3O-itNKT3n6pd687XQmjoCMdbI3z5hWlpbbvIEG8cOf9UKAap5GYCxqkzDCrb6KibwjAbhAHw_SYju80HNn',
        property: ['Kim tự tháp Giza', 'item 5', 'item 6']
      },
      {
        id: 3,
        imageUrl: 'https://sites.google.com/site/kyquan9a13/_/rsrc/1475910590948/ky-quan-the-gioi-co-dai/2b-vuon-treo-babylon-lich-su-va-dia-li/vuon-treo-babylon.jpg',
        property: ['Vườn treo Babylon', 'item 8', 'item 9']
      },
      {
        id: 4,
        imageUrl: 'https://toplist.vn/images/800px/thap-nghieng-pisa-489711.jpg',
        property: ['Tháp nghiêng Pisa', 'item 3', 'item 3']
      },
      {
        id: 5,
        imageUrl: 'https://tikibook.com/upload/news/012020/dau-truong-la-ma-0.jpg',
        property: ['Đấu trường la mã', 'item 3', 'item 3']
      },
      {
        id: 6,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TvJGdy6Sgt0wub1PzZrz3Jj7iAWVHyCGBg&usqp=CAU',
        property: ['Đền Angkor Wat', 'item 3', 'item 3']
      },
      {
        id: 7,
        imageUrl: 'https://chuaadida.com/Uploads/images/kh%C3%A1m%20ph%C3%A1%20%C4%91%C3%B3%20%C4%91%C3%A2y/10-ky-quan-dep-nhat-the-gioi-do-lonely-planet-binh-chon-hinh-3.jpg',
        property: ['Machu Picchu', 'item 3', 'item 3']
      },
      {
        id: 8,
        imageUrl: 'https://chuaadida.com/Uploads/images/kh%C3%A1m%20ph%C3%A1%20%C4%91%C3%B3%20%C4%91%C3%A2y/10-ky-quan-dep-nhat-the-gioi-do-lonely-planet-binh-chon-hinh-4.jpg',
        property: ['Vạn lý trường thành', 'item 3', 'item 3']
      },
      {
        id: 9,
        imageUrl: 'https://chuaadida.com/Uploads/images/kh%C3%A1m%20ph%C3%A1%20%C4%91%C3%B3%20%C4%91%C3%A2y/10-ky-quan-dep-nhat-the-gioi-do-lonely-planet-binh-chon-hinh-8.jpg',
        property: ['Thác Iguazú Falls', 'item 3', 'item 3']
      }
    ]
  );
}
