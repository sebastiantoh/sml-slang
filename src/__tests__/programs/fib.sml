fun fib n =
  let
    fun loop acc i =
      if i > n then
        rev acc
      else
        case acc of
          [] => loop [0] (i + 1)
        | [0] => loop (1::acc) (i + 1)
        | snd::fst::_ => loop ((fst+snd)::acc) (i + 1)
  in
    loop [] 0
end

val () = (
  print (fib 0);
  print (fib 1);
  print (fib 2);
  print (fib 20)
)
