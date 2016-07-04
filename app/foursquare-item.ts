export class Item {

  reasons:{
    count: number;
    items: [
      {
        summary: string;
        type: string;
        reasonName: string;
      }
      ]
  }
  venue:{
    id: string;
    name: string;
    contact: {
      twitter: string;
      facebook: string;
      facebookUsername: string;
      facebookName: string;
    }
    location: {
      address: string;
      crossStreet: string;
      lat: number;
      lng: number;
      distance: number;
      cc: string;
      city: string;
      state: string;
      country: string;
      formattedAddress: string[]
    }
    categories: [
      {
        id: string;
        name: string;
        pluralName: string;
        shortName: string;
        icon: {
          prefix: string;
          suffix: string;
        }
        primary: boolean;
      }
      ]
    verified: boolean;
    stats: {
      checkinsCount: number;
      usersCount: number;
      tipCount: number;
    }
    rating: number;
    ratingColor: string;
    ratingSignals: number;
    hours: {
      status: string;
      isOpen: boolean;
      isLocalHoliday: boolean;
    }
    photos: {
      count: number;
      groups:[{
        items: [{
          prefix: string,
          suffix: string
        }]
      }]
    }
    hereNow: {
      count: number;
      summary: string;
      groups: string[]
    }
  }
  tips:[
    {
      id: string;
      createdAt: number;
      text: string;
      type: string;
      canonicalUrl: string;
      likes: {
        count: number;
        groups: string[]
        summary: string;
      }
      logView: boolean;
      agreeCount: number;
      disagreeCount: number;
      todo: {
        count: number;
      }
      user: {
        id: string;
        firstName: string;
        lastName: string;
        gender: string;
        photo: {
          prefix: string;
          suffix: string;
        }
      }
    }
    ]
  referralId:string;

}
