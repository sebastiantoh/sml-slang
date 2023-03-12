fun fizz_buzz n =
  let
    val fizz = "Fizz"
    val buzz = "Buzz"

    fun loop i =
      if i > n then
        ()
      else (
        if (i mod 15 = 0) then
          print (fizz ^ buzz)
        else if (i mod 3 = 0) then
          print buzz
        else if (i mod 5 = 0) then
          print fizz
        else
          print i;
        loop (i + 1)
      )
  in
    loop 1
  end

val () = fizz_buzz 100
