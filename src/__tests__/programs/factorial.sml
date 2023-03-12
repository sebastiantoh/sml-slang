fun fact1 n =
  if n = 0 then
    1
  else
    n * (fact1 (n - 1))

val rec fact2 =
  fn 0 => 1
  | n => n * (fact2 (n - 1))

fun fact3 n acc =
  if n = 0 then
    acc
  else
    fact3 (n - 1) (acc * n)

val () = (
  print (fact1 10);
  print (fact2 20);
  print (fact3 30 1)
)
