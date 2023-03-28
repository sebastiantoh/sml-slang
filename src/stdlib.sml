fun hd lst = case lst of x::xs => x

fun tl lst = case lst of x::xs => xs

fun length lst =
  let
    fun loop acc lst =
      case lst of [] => acc | x::xs => loop (acc + 1) (xs)
  in
    loop 0 lst
end

fun rev lst =
  let
    fun loop acc lst =
      case lst of [] => acc | x::xs => loop (x::acc) (xs)
  in
    loop [] lst
end

fun map f lst =
  let
    fun loop acc lst =
      case lst of [] => rev acc | x::xs => loop (f x::acc) (xs)
  in
    loop [] lst
end
