export const musicTypeEnums = {
    '1': 'Electronic Dance',
    '2': 'Rock',
    '3': 'Jazz',
    '4': 'Dubstep',
    '5': 'RNB',
    '6': 'Country Music',
    '7': 'Electro',
    '8': 'Indie Rock',
    '18': 'Hip Hop',
    '19': 'Pop',
    '20': 'International',
    '21': 'Classical',
    '22': 'Festive',
    '23': "Era/70's/80's",
    '24': 'Live Music'
  }

export const musicTypeCheck = (musicType) => {
    // let result = "";
    // arr.forEach(data =>{
    //     result = result + musicType[data]+ ","
    // });
    // return result.splice(0,result.length -1)
    return musicTypeEnums[musicType];
}

const landmarkTypeEnums = {
  "1":"Park",
  "2":"Sightseeing",
  "3":"Lake",
  "4":"Architechture",
  "5":"Musuems",
  "6":"Cultural",
  "7":"ThemePark",
  "8":"ReligiousSite",
  "9":"Garden"
}

export const landmarkTypeCheck = (landmarkType) => {
  return landmarkTypeEnums[landmarkType]
}

export const actionTypeEnums = {
'1': 'Eat',
'2': 'Drink',
'3': 'Dance',
'4': 'Play',
'5': 'Explore',
'6': 'watch',
'7': 'networking',
'8': 'Celebrate',
'9': 'sing',
'10': 'study'
}

export const actionTypeCheck = (actionType) =>{
  // let result = arr.reduce((total,current) =>{
  //   return total + ',' + actionType[current]
  // },"")

  // let newRes = result.slice(1,result.length)
  // return newRes
  return actionTypeEnums[actionType];
}

export const eventType = {
    '1': 'LONO',
    '2': 'User',
    '3': 'Venue',
    '4': 'Festival',
    '5': 'Activity',
    '6': 'Family',
    '7': 'Sport',
    '8': 'Food',
    '9': 'Art',
    '10': 'Cultural',
    '11': 'Holiday',
    '12': 'Film',
    '13': 'Networking',
    '14': 'AdultsOnly',
    '15': 'Concert',
    '16': 'NightLife',
    '17': 'Entertainment',
    '18': 'Music',
    '19': 'Physical',
    '20': 'singing',
    '21': 'cook',
    '22': 'paint',
    '23': 'cycle',
    '24': 'dance',
    '25': 'sculpt',
    '26': 'hike',
    '27': 'swim',
    '28': 'draw',
    '29': 'go-kart',
    '30': 'ice-skate',
    '31': 'roller-blade',
    '32': 'climb',
    '33': 'camp',
    '34': 'meditation',
    '35': 'photography',
    '36': 'literature',
    '37': 'bake',
    '38': 'knit',
    '39': 'tattoo/piercing',
    '40': 'shopping',
    '41': 'arcade/games',
    '42': 'stargaze',
    '43': 'birdwatch',
    '44': 'DIY-crafts',
    '45': 'volunteer',
    '46': 'agriculture',
    '47': 'yoga',
    '48': 'run/jog',
    '49': 'write',
    '50': 'horseback-ride'
  }

  export const eventTypeCheck = (arr)=>{
    
    let result = arr.reduce((total,current) =>{
      return total + ',' + eventType[current]
    },"")

    let newRes = result.slice(1,result.length)
    return newRes
}

export const cuisineTypeEnums = {
    '1': 'American/Canadian',
    '2': 'British',
    '3': 'Carribean',
    '4': 'Chinese',
    '5': 'French',
    '6': 'Greek',
    '7': 'Italian',
    '8': 'Indian',
    '9': 'Japanese',
    '10': 'Mexican',
    '11': 'Middle-Eastern',
    '12': 'Thai',
    '13': 'Vietnamese',
    '14': 'Spanish',
    '15': 'Seafood',
    '16': 'Portuguese',
    '17': 'Halal',
    '18': 'Vegetarian',
    '19': 'Vegan',
    '20': 'Kosher',
    '21': 'Ice Cream',
    '22': 'Pastries',
    '23': 'Breakfast',
    '24': 'Brunch',
    '25': 'Lunch',
    '26': 'Dinner',
    '27': 'Late Night',
    '28': 'Supper Club',
    '29': 'Dessert',
    '30': 'Turkish',
    '31': 'Hawaiian',
    '32': 'Malaysian',
    '33': 'Indonesian',
    '34': 'Peruvian'
  }

  export const cuisineTypeCheck = (cuisineType) => {
    return cuisineTypeEnums[cuisineType];
  } 

  export const occasionType = {
    '1': 'Casual',
    '2': 'Formal',
    '3': 'Semi-formal',
    '4': 'business',
    '5': 'special'
  }

  export const drinkTypeEnums = {
    '1': 'Wine',
    '2': 'Cocktail',
    '3': 'Beer',
    '4': 'Coffee',
    '5': 'Tea',
    '6': 'Matcha',
    '7': 'Juice',
    '8': 'Smoothie',
    '9': 'Bubble-Tea',
    '10': 'Kombucha',
    '11': 'Cider',
    '12': 'Champagne',
    '13': 'sake'
  }

  export const drinkTypeCheck = (drinkType) => {
    return drinkTypeEnums[drinkType];
  }

export const venueTypeEnums = {
    '0': 'No Type',
    '9': 'Bar',
    '10': 'Restaurant',
    '11': 'Cafe',
    '12': 'Club',
    '13': 'Festival',
    '20': 'Office',
    '21': 'Yelp'
  }

export const venueTypeCheck = (venueType) => {
  console.log(venueType);
  return venueTypeEnums[venueType];
}

export const groupSizeType = { '1': '1-2', '2': '2-4', '3': '5-10', '4': '10+' }
export const budgetType = { '1': '$', '2': '$$', '3': '$$$', '4': '$$$$' }
export const ageType = { '1': 'General', '2': '18+', '3': 'Kids/under 18' }
export const dressCode = { '1': 'Casual', '2': 'Formal', '3': 'Semi-formal' }