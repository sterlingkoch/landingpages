function addScript (src, content, location) {
  var s = document.createElement('script')

  if (src) {
    s.setAttribute('src', src)
  }

  if (content) {
    s.textContent = content
  }

  if (location === 'foot') {
    document.body.appendChild(s)
  } else if (location === 'head') {
    document.head.appendChild(s)
  }
}

function getNextHighestIndex (arr, number) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      return i
    }
  }
}

function redirectBasedOnCounter (db) {
  let counterRef = db.ref()
  var activeProduct = ''

  counterRef.once('value', function (snapshot) {
    var sbli = snapshot.val().counter.sbli
    var securian = snapshot.val().counter.securian
    var sbliTotal = snapshot.val().totals.sbli
    var securianTotal = snapshot.val().totals.securian

    /* goal: go up to 17 Securian, then 3 SBLI */
    if (securian >= 5 && sbli < 1) { // if enough Securian, increment SBLI
      sbli++
      sbliTotal++
      counterRef.update({
        'counter/sbli': sbli,
        'totals/sbli': sbliTotal
      })
      activeProduct = 'SBLI_AU'
    } else if (securian >= 5 && sbli >= 1) { // if enough of each, reset both to 0
      securianTotal++
      counterRef.update({
        'counter/sbli': 0,
        'counter/securian': 1,
        'totals/securian': securianTotal
      })
      activeProduct = 'Securian'
    } else { // increment Securian (default)
      securian++
      securianTotal++
      counterRef.update({
        'counter/securian': securian,
        'totals/securian': securianTotal
      })
      activeProduct = 'Securian'
    }

    localStorage.setItem('covrLP_product', activeProduct)
  })
}

export {
  addScript,
  getNextHighestIndex,
  redirectBasedOnCounter
}
