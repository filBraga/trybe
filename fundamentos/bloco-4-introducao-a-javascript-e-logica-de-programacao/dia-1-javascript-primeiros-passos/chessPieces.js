//Chose your piece: Pawn, Bishop, Knight, Rook, Queen or King

let piece = "KING";

switch (piece.toLowerCase()) {
  case "pawn":
    console.log("First move: one or two foward. Then only one foward");
    break;
  case "bishop":
    console.log("Diagonals");
    break;
  case "knight":
    console.log("Two foward, one left/right");
    break;
  case "rook":
    console.log("Straight");
    break;
  case "queen":
    console.log("All");
    break;
  case "king":
    console.log("One in all directions");
    break;
  default:
    console.log(`Sorry, there is no piece called ${piece}.`);
}
