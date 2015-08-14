var myApp = angular.module("reddit", []);

myApp.controller("users", ["$scope", function($scope) {
  $scope.posts = [
    {title: "Aspen, CO",
      vote: -9,
      author: "Ned Stark",
      content: "Vestibulum id urna nec massa congue gravida a ut nisi. Nullam sit amet urna rutrum, faucibus quam quis, sagittis ipsum. Integer condimentum, felis id ultricies blandit, velit eros imperdiet elit, ut vulputate arcu purus sed elit. Morbi efficitur cursus dictum. Cras sagittis sapien vel quam euismod feugiat. Cras a risus quis libero venenatis aliquam. In tristique maximus convallis.Vestibulum id urna nec massa congue gravida a ut nisi. Nullam sit amet urna rutrum, faucibus quam quis, sagittis ipsum. Integer condimentum, felis id ultricies blandit, velit eros imperdiet elit, ut vulputate arcu purus sed elit. Morbi efficitur cursus dictum. Cras sagittis sapien vel quam euismod feugiat. Cras a risus quis libero venenatis aliquam. In tristique maximus convallis",
      date: moment(1439201833740).calendar(),
      imageURL: "http://www.liftopia.com/media/product/5051/102416_Aspen-Snowmass-Perfect-Summer-Package.jpg",
      countOrder: 0,
      comments: [
        {name: "Bob",
          comment: "That was crazy cool"
        }
      ],
    },
    {title: "Boulder, CO",
      vote: 12,
      author: "Jon Snow",
      content: "Vestibulum id urna nec massa congue gravida a ut nisi. Nullam sit amet urna rutrum, faucibus quam quis, sagittis ipsum. Integer condimentum, felis id ultricies blandit, velit eros imperdiet elit, ut vulputate arcu purus sed elit. Morbi efficitur cursus dictum. Cras sagittis sapien vel quam euismod feugiat. Cras a risus quis libero venenatis aliquam. In tristique maximus convallis.",
      date: moment(1439313833740).calendar(),
      imageURL: "https://dombestlist.files.wordpress.com/2011/08/boulder-colorado.jpg",
      countOrder: 1,
      comments: [
        {name: "Tess",
          comment: "what's going on?"
        },
        {name: "Brian",
          comment: "Nice picture!"
        },
        {name: "Joe",
          comment: "I wish I lived there"
        }
      ],
    },
    {title: "Denver, CO",
      vote: 9,
      author: "Daenerys Targaryen",
      content: "Vestibulum id urna nec massa congue gravida a ut nisi. Nullam sit amet urna rutrum, faucibus quam quis, sagittis ipsum. Integer condimentum, felis id ultricies blandit, velit eros imperdiet elit, ut vulputate arcu purus sed elit. Morbi efficitur cursus dictum. Cras sagittis sapien vel quam euismod feugiat. Cras a risus quis libero venenatis aliquam. In tristique maximus convallis.",
      imageURL: "http://www.hotelroomsearch.net/im/2014/12/denver-colorado.jpg",
      countOrder: 2,
      date: moment(1439413433740).calendar(),
      comments: [
        {name: "Tracey",
          comment: "That's one big city!"
        },
        {name: "Sam",
          comment: "My name isn't who I say I am, I say I am who you say you think I am"
        }
      ],
    },
    {title: "Colorado Springs, CO",
      vote: 4,
      author: "Tyrion Lannister",
      content: "Vestibulum id urna nec massa congue gravida a ut nisi. Nullam sit amet urna rutrum, faucibus quam quis, sagittis ipsum. Integer condimentum, felis id ultricies blandit, velit eros imperdiet elit, ut vulputate arcu purus sed elit. Morbi efficitur cursus dictum. Cras sagittis sapien vel quam euismod feugiat. Cras a risus quis libero venenatis aliquam. In tristique maximus convallis.",
      date: moment(1439496091029).calendar(),
      imageURL: "http://pics4.city-data.com/cpicv/vfiles9625.jpg",
      countOrder: 3,
      comments: [
      ],
    },
    {title: "Pueblo, CO",
      vote: -1,
      author: "Jaime Lannister",
      content: "Vestibulum id urna nec massa congue gravida a ut nisi. Nullam sit amet urna rutrum, faucibus quam quis, sagittis ipsum. Integer condimentum, felis id ultricies blandit, velit eros imperdiet elit, ut vulputate arcu purus sed elit. Morbi efficitur cursus dictum. Cras sagittis sapien vel quam euismod feugiat. Cras a risus quis libero venenatis aliquam. In tristique maximus convallis.",
      date: moment(1439566425479).calendar(),
      imageURL: "http://www.liveinpueblo.com/briefcase/99572_9232014102144AM34267.JPG",
      countOrder: 4,
      comments: [
        {name: "Josh",
          comment: "food for thought"
        },
        {name: "Rumge",
          comment: "Thats intersting! #GotMilk"
        }
      ],
    },
    {title: "Durango, CO",
      vote: -5,
      author: "Petyr Baelish",
      content: "Vestibulum id urna nec massa congue gravida a ut nisi. Nullam sit amet urna rutrum, faucibus quam quis, sagittis ipsum. Integer condimentum, felis id ultricies blandit, velit eros imperdiet elit, ut vulputate arcu purus sed elit. Morbi efficitur cursus dictum. Cras sagittis sapien vel quam euismod feugiat. Cras a risus quis libero venenatis aliquam. In tristique maximus convallis.",
      date: moment(1439569455453).calendar(),
      imageURL: "http://www.gatewayreservations.com/wp-content/uploads/2014/10/durango-colorado-460x247.jpg",
      countOrder: 5,
      comments: [
        {name: "Bobby",
          comment: "Hey, man nice story about that city"
        }
      ],
    }
  ];
  $scope.lists = ["foo", "bar"];
  $scope.newComment = function(name, comment, counter) {
    var object = {};
    object.name = name;
    object.comment = comment;
    var numb = parseInt(this.countOrder);
    $scope.posts[numb].comments.push(object);
  };
  $scope.newPost = function() {
    var object = {};
    object.vote = 0;
    object.title = this.title;
    object.author = this.author;
    object.content = this.content;
    object.date = Date.now();
    object.imageURL = this.imageURL;
    object.countOrder = $scope.posts.length;
    object.comments = [];
    $scope.posts.push(object);
  };
  $scope.upvote = function(count) {
    $scope.posts[count].vote++;
  };
  $scope.downvote = function(count) {
    $scope.posts[count].vote--;
  };
}]);
