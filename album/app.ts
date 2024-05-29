//assignment no : 40
//function make_album1(artistName:string, albumTitle:string){
  //  return {
      //  artistName , albumTitle
   // }
//}
//let album1 = make_album1("atif aslam", "psl song")
//let album2 = make_album1("honey singh", "ipl song")
//let album3 = make_album1("ali zafar", "cpl song")

//console.log(album1)
//console.log(album2)
//console.log(album3)

//i comment all above function just to run the functio n of track number in comment

//it includes track number
function make_album2(artistName:string, albumTitle:string, numberOfTracks?: number){
   return {
       artistName , albumTitle , numberOfTracks
   }
}
let album4 = make_album2("atif aslam", "psl song", 40)
let album5 = make_album2("honey singh", "ipl song", 20)
let album6 = make_album2("ali zafar", "cpl song", 30)

console.log(album4)

console.log(album5)

console.log(album6)

