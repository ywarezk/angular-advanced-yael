/**
 *

 https://nechama.com/api/city
 https://nechama.com/api/address
 https://nechama.com/api/street


{
  entityCache: {
    city: {
      ids: [...],
      entities: {
        1: {id: 1, title: 'some city', description: 'some description'},
        2: {id: 2, title: 'some city', description: 'some description'}
      }
    }
  }
}

 */



export interface Generic {
  id: number;
  title: string;
  description: string;
}
