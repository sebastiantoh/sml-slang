fun gcd a b =
  if b = 0 then a else gcd b (a mod b)

val () = (
  print (gcd 13 27);
  print (gcd 20536 7826)
)
