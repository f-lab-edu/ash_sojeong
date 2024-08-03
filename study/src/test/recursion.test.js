const recursion  = (obj) => {
    let result = {}

    for (let key in obj) {
        if (typeof obj[key] === 'Object') {
            result[key] = recursion(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }

    return result;
}

describe('clone deep', () => {
    const objs = [];

    const obj1 = {
        a: {
            "1": 'one',
            'tow': 2
        },
        b: [{
            c: '1'
        }]
    };

    const obj2 = {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
          {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
          },
          {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
              "Million tonne punch",
              "Damage resistance",
              "Superhuman reflexes"
            ]
          },
          {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
              "Immortality",
              "Heat Immunity",
              "Inferno",
              "Teleportation",
              "Interdimensional travel"
            ]
          }
        ]
      }

    objs.push(obj1);
    objs.push(obj2);

    test.each(objs)('recursion', (obj) => {
       expect(recursion(obj)).toEqual(obj);
    });
 });