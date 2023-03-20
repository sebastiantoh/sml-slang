fun my_and a b =
  case a of
   false => false
  | true =>
  case b of
   false => false
  | true => true

fun my_or a b = if a then true else b

fun my_not a = case a of false => true | true => false

fun my_xor a b = my_not (a = b)

val () = (
  print (my_and true true);
  print (my_and true false);
  print (my_and false true);
  print (my_and false false);

  print (my_or true true);
  print (my_or true false);
  print (my_or false true);
  print (my_or false false);

  print (my_not true);
  print (my_not false);

  print (my_xor true true);
  print (my_xor true false);
  print (my_xor false true);
  print (my_xor false false)
)
