fun is_prime n =
  let
    fun is_not_divisor d =
      (d * d > n) orelse ((n mod d <> 0) andalso (is_not_divisor (d + 1)))
  in
    n <> 1 andalso is_not_divisor 2
  end

val () = (
  print (is_prime 2);
  print (is_prime 3);
  print (is_prime 4800);
  print (is_prime 4801);
  print (is_prime 7850);
  print (is_prime 7853)
)
