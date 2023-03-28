(* TODO: add tests for negative cases, e.g. when lst is empty. Add tests for other lists stdlib functions here*)

fun test_hd () = (
  print (hd [1,2,3])
)

fun test_tl () = (
  print (tl [1,2,3])
)

fun test_length () = (
  print (length []);
  print (length [1,2,3])
)

fun test_rev () = (
  print (rev []);
  print (rev [1,2,3])
)

fun test_map () = (
  print (map (fn x => x + 1) []);
  print (map (fn x => x + 1) [1,2,3]);
  print (map (fn x => "ABC") [1,2,3])
)

val () = (
  test_hd ();
  test_tl ();
  test_length ();
  test_rev ();
  test_map ()
)
