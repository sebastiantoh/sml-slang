fun hd lst = case lst of x::xs => x

fun tl lst = case lst of x::xs => xs

(* TODO: add tests for negative cases, e.g. when lst is empty. Add tests for other lists stdlib functions here*)

val () = (
  print (hd [1,2,3]);
  print (tl [1,2,3])
)
