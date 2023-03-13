function beltLength(bigPulleyDiamIn, smallPulleyDiamIn, centerDistIn) {
  // https://theengineeringmindset.com/pulley-belt-calculations/
  const part1 = Math.PI * (bigPulleyDiamIn + smallPulleyDiamIn) * 0.5 + (2 * centerDistIn);
  const part2 = (smallPulleyDiamIn - bigPulleyDiamIn) ** 2;
  return part1 + (part2 / (4 * centerDistIn));
}

// https://www.blocklayer.com/pulley-belteng.aspx
var rotInc = 0, rotAngleLarge = 0, rotAngleSmall = 0, isRotating = !1, rat, diamSmall, diamLarge, centers, minCenters, rpmLarge, rpmSmall, beltLen, gap, offRangle, maxRPM = 1200, isSmall = !0, isOK = !0;
function SetCalc() {
  SetImperialSelect();
  _den = 16;
  Calculate();
  CalcSets();
  DrawRPM();
  isRotating = !0;
  Demo();
  SetNumeric();
  SetAnimFrame();
  CalcFrom3();
  ClearAll()
}
function Calculate(b = !1) {
  var c = Get32nds(null, "ddSmallInches", "ddSmallFrac"),
    e = Get32nds(null, "ddLargeInches", "ddLargeFrac");
  if (8 > c || 16 > e) alert('Large Pulley min = 1/2"\n\nSmall Pulley min = 1/4"'), isOK = !1;
  else if (c > e) alert("Large Pulley Diameter must be larger than Small Pulley Diameter"), isOK = !1;
  else {
    var l = isSmall ? 2E4 : 2E4 / rat;
    isValid = !0;
    l = parseCheck("txtRPM", "RPM", 0, l);
    if (isValid)
      if (centers = Get32nds(null, "ddCentersInches", "ddCentersFrac"), minCenters = parseInt(c / 2 + e / 2) + 1, centers <= minCenters)
        alert("Pulley Center Distance Too Small\n\nPulleys Would Overlap\n\nMin Distance = " + ConEng(minCenters + 1, !1)), isOK = !1;
      else {
        diamSmall = c;
        diamLarge = e;
        isOK = !0;
        gap = centers - minCenters;
        32 > gap ? $("spnGap").style.display = "block" : $("spnGap").style.display = "none";
        isSmall ? (rpmSmall = l, rpmLarge = l / diamLarge * diamSmall) : (rpmLarge = l, rpmSmall = l / diamSmall * diamLarge);
        rat = diamLarge / diamSmall;
        offRangle = 2 * Math.acos((diamLarge / 2 - diamSmall / 2) / centers);
        offRangle = (RAD180 - offRangle) / 2;
        c = RAD180 + 2 * offRangle;
        e = RAD180 - 2 * offRangle;
        l = Math.PI * diamLarge / (RAD360 / c);
        var h = Math.PI * diamSmall / (RAD360 / e);
        $("cnvsPulleys").style.display =
          "block";
        $("spnResults").style.display = "block";
        var k = Math.PI * diamLarge * rpmLarge / 384;
        beltLen = 2 * centers + 1.57 * (diamLarge + diamSmall) + Math.pow(diamLarge - diamSmall, 2) / (4 * centers);
        k = "Belt Length " + ConEng(beltLen, !1) + "<br />Ratio &nbsp;1 : " + RoundTo(rat, 2) + "<br/> RPM Small " + RoundTo(rpmSmall, 1) + "<br/> RPM Large " + RoundTo(rpmLarge, 1) + " <br/> Belt Speed " + RoundTo(k, 1) + " ft / min <br/> Pulley Gap " + ConEng(gap, !1);
        $("spnResults").innerHTML = FormatImp(k);
        k = "Belt Contact Large " + ConEng(l, !1) + " <br /> Belt Contact Small " +
          ConEng(h, !1) + "<br />Belt Contact Angle Small " + RoundTo(e / RAD, 1) + "&deg;<br />Belt Contact Angle Large " + RoundTo(c / RAD, 1) + "&deg;";
        $("spnResults2").innerHTML = FormatImp(k);
        $("rngCenters").min = minCenters;
        $("rngCenters").max = Math.min(1536, (diamLarge + diamSmall) / 2 * 10);
        $("rngCenters").value = centers;
        $("rngDiamSmall").max = Math.min(diamLarge - 16, 2 * (centers - diamLarge / 2 - 16));
        $("rngDiamSmall").value = diamSmall;
        $("rngDiamLarge").min = diamSmall + 2;
        $("rngDiamLarge").max = Math.min(768, 2 * (centers - diamSmall / 2) - 10);
        $("rngDiamLarge").value =
          diamLarge;
        Draw();
        b || (maxRPM = Math.min(1.2 * rpmSmall, 2E4), $("rngRPM").min = 0, $("rngRPM").max = maxRPM, $("rngRPM").value = rpmSmall);
        DrawRPM()
      } else isOK = !1
  }
}

function Draw() {
  isRotating && (rotAngleLarge += rotInc, rotAngleSmall = rotAngleLarge * rat);
  var b = $("cnvsPulleys"), c = (b.width - 40) / 2, e = b.width / 2 - 10, l = 2 * c / diamLarge, h = diamSmall * l / 2, k = centers * l, f = e + k;
  b.height = c + k + h + 20;
  var a = b.getContext("2d");
  a.clearRect(0, 0, b.width, b.height);
  a.strokeStyle = "#808080";
  a.fillStyle = "#ececec";
  a.lineWidth = 1;
  a.beginPath();
  a.arc(e, e, c, 0, RAD360, !1);
  a.fill();
  a.stroke();
  a.beginPath();
  a.arc(e, f, h, 0, RAD360, !1);
  a.fill();
  a.stroke();
  a.save();
  a.shadowOffsetY = 6;
  a.shadowOffsetX = 6;
  a.shadowBlur =
    6;
  a.shadowColor = "#b0b0b0";
  a.fillStyle = "#808080";
  a.beginPath();
  a.arc(e, e, .14 * c, 0, RAD360, !1);
  a.fill();
  a.stroke();
  a.beginPath();
  a.arc(e, f, .14 * h, 0, RAD360, !1);
  a.fill();
  a.stroke();
  a.fillStyle = "#fff";
  a.beginPath();
  a.arc(e, e, .04 * c, 0, RAD360, !1);
  a.fill();
  a.stroke();
  a.beginPath();
  a.arc(e, f, .04 * h, 0, RAD360, !1);
  a.fill();
  a.stroke();
  a.restore();
  a.strokeStyle = "#080";
  a.lineWidth = 3;
  a.beginPath();
  a.arc(e, e, c + 2, offRangle, RAD180 - offRangle, !0);
  a.arc(e, f, h + 2, RAD180 - offRangle, offRangle, !0);
  a.closePath();
  a.stroke();
  a.lineWidth =
    1;
  a.strokeStyle = "Gray";
  a.beginPath();
  a.moveTo(e + c + 10, e);
  a.lineTo(e + c + 30, e);
  a.moveTo(e + c + 10, f);
  a.lineTo(e + c + 30, f);
  a.stroke();
  a.font = "13px Verdana";
  a.fillStyle = "#000";
  a.textAlign = "center";
  a.save();
  a.translate(e + c + 14, e + k / 2);
  a.rotate(RAD90);
  a.fillText("\u2190 Centers " + ConEng(centers, !1) + " \u2192", 0, 0);
  a.restore();
  b = "\u2190 Gap " + ConEng(gap, !1) + " \u2192";
  a.measureText(b).width < gap * l ? (a.save(), a.translate(e, e + c + gap * l / 2), a.rotate(RAD90), a.textBaseline = "middle", a.fillText(b, 0, 0)) : (a.save(), a.textBaseline =
    "middle", 20 > gap && (a.fillStyle = "#f00"), a.fillText("Gap \u2195 " + ConEng(gap, !1), e, e + c + gap * l / 2));
  a.restore();
  l = .7 * c;
  c *= .21;
  a.save();
  a.translate(e, e);
  a.rotate(rotAngleLarge * RAD);
  a.beginPath();
  a.arc(0, -l, c, 0, RAD360, !0);
  a.fillStyle = "#FFF";
  a.fill();
  a.stroke();
  a.beginPath();
  a.arc(0, l, c, 0, RAD360, !0);
  a.fill();
  a.stroke();
  a.beginPath();
  a.arc(-l, 0, c, 0, RAD360, !0);
  a.fill();
  a.stroke();
  a.beginPath();
  a.arc(l, 0, c, 0, RAD360, !0);
  a.fill();
  a.stroke();
  a.fillStyle = "#000";
  a.fillText("Belt " + ConEng(beltLen, !1), 0, -50);
  a.fillText("Diameter " +
    ConEng(diamLarge, !1), 0, -30);
  a.fillText("Centers " + ConEng(centers, !1), 0, 40);
  a.fillStyle = "#f00";
  a.fillText(RoundTo(rpmLarge, 1) + " RPM", 0, 60);
  a.restore();
  a.font = MinMax(.2 * h, 8, 12) + "px Verdana";
  a.save();
  a.translate(e, f);
  a.rotate(rotAngleSmall * RAD);
  l = .7 * h;
  c = h / 5;
  a.beginPath();
  a.arc(0, -l, c, 0, RAD360, !0);
  a.fillStyle = "#FFF";
  a.fill();
  a.stroke();
  a.beginPath();
  a.arc(0, l, c, 0, RAD360, !0);
  a.fill();
  a.stroke();
  a.beginPath();
  a.arc(-l, 0, c, 0, RAD360, !0);
  a.fill();
  a.stroke();
  a.beginPath();
  a.arc(l, 0, c, 0, RAD360, !0);
  a.fill();
  a.stroke();
  a.fillStyle = "#000";
  a.fillText(ConEng(diamSmall, !1), 0, -(.2 * h));
  a.fillStyle = "#f00";
  a.fillText(RoundTo(rpmSmall, 1), 0, .3 * h);
  a.fillText("RPM", 0, .3 * h + 10);
  a.restore()
} function rngRPM_Change(b) { isOK && (b = isSmall ? b.value : b.value / rat, $("txtRPM").value = Math.round(b), CallAnim(!0)) } function ChangePulley(b) {
  isSmall = "small" === b.value;
  $("txtRPM").value = isSmall ? Math.round(rpmSmall) : Math.round(rpmLarge);
  Calculate(!0)
} var autoRot = null;
function StopRot() {
  clearInterval(autoRot);
  $("rngRot").value = 0;
  isRotating = !1;
  rotAngleSmall = rotAngleLarge = 0;
  Draw()
} function rngRot_Change(b) { isOK && (0 < b.value ? (rotInc = parseFloat(b.value), isRotating || (isRotating = !0, autoRot = setInterval("CallAnimDraw()", rotInc))) : StopRot()) } function rngCenters_Change(b) { isOK && (b = parseFloat(b.value), b > minCenters && (BindInch("ddCentersInches", b), BindFrac("ddCentersFrac", b), CallAnim(!0))) }
function rngDiamSmall_Change(b) { isOK && (Bind(null, "ddSmallInches", "ddSmallFrac", b.value), CallAnim(!0)) } function rngDiamLarge_Change(b) { isOK && (Bind(null, "ddLargeInches", "ddLargeFrac", b.value), CallAnim(!0)) } var rotDemo = .0445;
function Demo() {
  rotInc += rotDemo;
  4 > rotInc && 0 < rotInc ? (setTimeout("Demo()", 20), $("rngRot").value = rotInc) : 4 < rotInc ? (rotDemo = -.0445, setTimeout("Demo()", 20)) : StopRot();
  Draw()
}
function DrawRPM() {
  var b = 300 * RAD, c = 120 * RAD, e = $("cnvsGauge"), l = e.width - 2, h = e.width / 2, k = h - 2;
  b /= maxRPM;
  var f = e.getContext("2d");
  f.clearRect(0, 0, e.width, e.height);
  f.lineWidth = 1;
  f.beginPath();
  f.arc(h, h, k, 0, RAD360, !0);
  f.strokeStyle = "gray";
  f.stroke();
  var a = c, n = Math.min(1E3 * b + 8, 40);
  f.font = n + "px Verdana";
  f.fillStyle = "#000";
  f.strokeStyle = "gray";
  if (1E4 <= maxRPM) {
    f.textAlign = "left";
    f.textBaseline = "middle";
    var d = RAD180
  } else f.textAlign = "center", f.textBaseline = "top", d = RAD90;
  f.beginPath();
  for (var p = 0;
    p <= maxRPM;
    p++) {
    e =
      h + Math.cos(a) * k;
    var m = h + Math.sin(a) * k;
    f.moveTo(e, m);
    0 === p % 1E3 ? (e = h + Math.cos(a) * (k - 30), m = h + Math.sin(a) * (k - 30), f.save(), f.translate(e, m), f.rotate(d + a), f.font = n + 6 + "px Verdana", f.fillText(p, 0, 2), f.restore()) : 0 === p % 100 ? (e = h + Math.cos(a) * (k - 20), m = h + Math.sin(a) * (k - 20), 3100 > maxRPM && (f.save(), f.translate(e, m), f.rotate(RAD90 + a), f.fillText(p, 0, 2), f.restore())) : 0 === p % 10 && 4E3 > maxRPM && (e = h + Math.cos(a) * (k - 12), m = h + Math.sin(a) * (k - 12));
    f.lineTo(e, m);
    a += b
  } f.stroke();
  f.beginPath();
  f.arc(h, h, 6, 0, RAD360, !0);
  f.fillStyle =
    "Red";
  f.fill();
  a = c + rpmLarge * b;
  f.beginPath();
  f.moveTo(h, h);
  e = h + Math.cos(a) * (k - 5);
  m = h + Math.sin(a) * (k - 5);
  f.lineTo(e, m);
  f.lineWidth = 2;
  f.strokeStyle = "#080";
  f.stroke();
  a = c + rpmSmall * b;
  f.beginPath();
  f.moveTo(h, h);
  e = h + Math.cos(a) * (k - 5);
  m = h + Math.sin(a) * (k - 5);
  f.lineTo(e, m);
  f.strokeStyle = "#f00";
  f.stroke();
  f.font = "12px Verdana";
  f.textAlign = "center";
  f.textBaseline = "top";
  f.fillStyle = "#000";
  f.fillText("Small", h, .62 * l);
  f.fillText("Large", h, .75 * l);
  f.fillStyle = "#00f";
  f.fillText("Ratio 1:" + RoundTo(rat, 2), h, .92 * l);
  f.font =
    "bold 18px Verdana";
  f.fillStyle = "#00f";
  f.fillText("RPM", h, .25 * l);
  f.font = "bold 16px Verdana";
  f.fillStyle = "#f00";
  f.fillText(Math.round(rpmSmall), h, .67 * l);
  f.fillStyle = "#080";
  f.fillText(Math.round(rpmLarge), h, .8 * l)
} var p1, p2, rpm1, rpm2;
function CalcFrom3() {
  var b = $("_txtPulley1"), c = $("_txtPulley2"), e = $("txtRPM1"), l = $("txtRPM2");
  isValid = !0;
  p1 = ConvertTo32ndsC("_txtPulley1", "Pulley 1", 32, 1152, !0) / 32;
  p2 = ConvertTo32ndsC("_txtPulley2", "Pulley 2", 32, 1152, !0) / 32;
  rpm1 = parseCheck("txtRPM1", "RPM 1", 0, 1E4, !0);
  rpm2 = parseCheck("txtRPM2", "RPM 2", 0, 1E4, !0);
  if (isValid) {
    b.className = "Pulley_Clear";
    c.className = "Pulley_Clear";
    e.className = "Pulley_Clear";
    l.className = "Pulley_Clear";
    var h = 0;
    if (0 === p1) {
      h++;
      var k = b
    } 0 === p2 && (h++, k = c);
    0 === rpm1 && (h++, k = e);
    0 ===
      rpm2 && (h++, k = l);
    1 === h ? (k === b ? p1 = b = rpm2 / rpm1 * p2 : k === c ? p2 = b = rpm1 / rpm2 * p1 : k === e ? rpm1 = b = p2 / p1 * rpm2 : rpm2 = b = p1 / p2 * rpm1, k.value = RoundTo(b, 2), k.className = "Pulley_Active", $("spnP1").innerHTML = ConEng(32 * p1, !1), $("spnP2").innerHTML = ConEng(32 * p2, !1), k = p1 > p2 ? p1 / p2 : p2 / p1, $("spnRatio").innerHTML = "1 : " + RoundTo(k, 1), DrawFrom3()) : ($("spnP1").innerHTML = "", $("spnP2").innerHTML = "", $("spnRatio").innerHTML = "", alert("Enter 3 known values (Diameter or RPM) leaving the unknown 4th value blank.\nThen hit Calculate to find the missing value"))
  }
}
function DrawFrom3() {
  var b = Math.max(p1, p2), c = Math.min(p1, p2), e = 0;
  isFrom3Rotating && (rotAngleSmallFrom3 += rotIncFrom3, e = rotAngleSmallFrom3 / (b / c));
  var l = c / 2, h = b / 2, k = $("cnvsCalcFrom3"), f = (k.height - 40) / b, a = h * f, n = l * f;
  $("rngCentersFrom3").min = p1 / 2 + p2 / 2 + .25;
  $("rngCentersFrom3").max = 1E3 / f;
  var d = parseFloat($("rngCentersFrom3").value);
  l = d - l - h;
  h = 2 * d + 1.57 * (b + c) + Math.pow(b - c, 2) / (4 * d);
  var p = d * f;
  k.width = n + p + a + 20;
  var m = n + 10, t = m + p, v = Math.max(rpm1, rpm2), u = Math.min(rpm1, rpm2), r = k.height / 2, g = k.getContext("2d");
  g.clearRect(0,
    0, k.width, k.height);
  g.beginPath();
  g.arc(m, r, n, 0, RAD360, !0);
  g.fillStyle = "#F3F3F3";
  g.fill();
  g.strokeStyle = "#000";
  g.stroke();
  g.beginPath();
  g.arc(m, r, 3, 0, RAD360, !0);
  g.fillStyle = "#fff";
  g.fill();
  g.stroke();
  g.beginPath();
  g.arc(t, r, a, 0, RAD360, !0);
  g.fillStyle = "#F3F3F3";
  g.fill();
  g.stroke();
  g.beginPath();
  g.arc(t, r, 6, 0, RAD360, !0);
  g.fillStyle = "#FFF";
  g.fill();
  g.stroke();
  var q = 2 * Math.acos((a - n) / p);
  q = (RAD180 - q) / 2;
  g.beginPath();
  g.arc(m, r, n + 1, RAD270 - q, RAD90 + q, !0);
  g.arc(t, r, a + 1, RAD90 + q, RAD270 - q, !0);
  g.closePath();
  g.strokeStyle =
    "#080";
  g.lineWidth = 3;
  g.stroke();
  g.lineWidth = 1;
  g.beginPath();
  g.moveTo(m, 0);
  g.lineTo(m, 16);
  g.moveTo(t, 0);
  g.lineTo(t, 16);
  g.strokeStyle = "Silver";
  g.stroke();
  a = $("rbDec").checked;
  q = MinMax(.2 * n, 9, 12);
  g.font = q + "px Verdana";
  g.fillStyle = "#000";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.save();
  g.translate(m, r);
  g.rotate(rotAngleSmallFrom3 * RAD);
  g.fillText("\u2190" + (a ? RoundTo(c, 2) + '"' : ConEng(32 * c, !1)) + "\u2192", 0, -q);
  g.fillStyle = "#f00";
  g.fillText("RPM " + Math.round(v), 0, q);
  g.restore();
  g.save();
  g.translate(t,
    r);
  g.rotate(e * RAD);
  g.font = "12px Verdana";
  g.fillText("\u2190" + (a ? RoundTo(b, 2) + '"' : ConEng(32 * b, !1)) + "\u2192", 0, -16);
  g.fillStyle = "#f00";
  g.fillText("RPM " + Math.round(u), 0, 16);
  g.restore();
  g.font = "13px Verdana";
  g.fillText("\u2190 Centres " + (a ? RoundTo(d, 2) + '"' : ConEng(32 * d, !1)) + " \u2192", m + p / 2, 8);
  g.fillText("Belt Length " + (a ? RoundTo(h, 2) + '"' : ConEng(32 * h, !1)), m + p / 2, k.height - 8);
  g.font = "10px Verdana";
  g.fillText("Gap", m + n + l * f / 2, r);
  g.fillText("\u2190" + (a ? RoundTo(l, 2) + '"' : ConEng(32 * l, !1)) + " \u2192", m + n + l * f / 2, r +
    12)
} function Clear(b) {
  b.value = "";
  b.className = "Pulley_Clear";
  "_txtPulley1" === b.id ? $("spnP1").innerHTML = "" : "_txtPulley2" === b.id && ($("spnP2").innerHTML = "")
} function ClearAll() {
  Clear($("_txtPulley1"));
  Clear($("_txtPulley2"));
  Clear($("txtRPM1"));
  Clear($("txtRPM2"))
}
function ShowMe() {
  ClearAll();
  $("_txtPulley1").value = 6;
  $("txtRPM1").value = 1E3;
  $("txtRPM2").value = 600;
  $("_txtPulley1").style.backgroundColor = "#0f0";
  $("txtRPM1").style.backgroundColor = "#0f0";
  $("txtRPM2").style.backgroundColor = "#0f0";
  $("_txtPulley2").style.backgroundColor = "#f00";
  setTimeout(() => {
    alert("Enter 3 known values (Diameter or RPM) leaving the unknown 4th value blank.\nThen hit Calculate to find the missing value");
    setTimeout(() => {
      $("_txtPulley1").style.backgroundColor = $("_txtPulley2").style.backgroundColor =
        $("txtRPM1").style.backgroundColor = $("txtRPM2").style.backgroundColor = "";
      CalcFrom3()
    }, 1E3)
  }, 200)
} var rotIncFrom3 = 0, autoRotFrom3, isFrom3Rotating = !1, rotAngleSmallFrom3 = 0;
function rngRotFrom3_Change(b) { 0 < parseFloat(b.value) ? (rotIncFrom3 = parseFloat(b.value), isFrom3Rotating || (isFrom3Rotating = !0, autoRotFrom3 = setInterval("CallAnimDrawFrom3()", rotIncFrom3))) : StopRotFrom3() } function StopRotFrom3() {
  clearInterval(autoRotFrom3);
  $("rngRotFrom3").value = 0;
  isFrom3Rotating = !1;
  rotAngleSmallFrom3 = 0;
  DrawFrom3()
}
var rotIncSets = 0, autoRotSets, isSetsRotating = !1, rotAngleSmallSet = 0;
function rngRotSets_Change(b) { 0 < parseFloat(b.value) ? (rotIncSets = parseFloat(b.value), isSetsRotating || (isSetsRotating = !0, autoRotSets = setInterval("CallAnimDrawSets()", rotIncSets))) : StopRotSets() } function StopRotSets() {
  clearInterval(autoRotSets);
  $("rngRotSets").value = 0;
  isSetsRotating = !1;
  rotAngleSmallSet = 0;
  DrawSets()
} function rngSetsRPM_change(b) {
  $("txtSetRPM").value = b.value;
  CalcSets(!1)
}
function ddSets_change(b) {
  for (var c = 3;
    5 > c;
    c++)$("trSets" + c).style.display = c <= b.value ? "table-row" : "none"
} function CheckSetDiam(b, c, e) { return 8 > c || 16 > e ? (alert("Set " + b + '\nLarge Pulley min = 1/2"\nSmall Pulley min = 1/4"'), !1) : e < c + 2 ? (alert("Set " + b + " Large Diameter must be larger than " + ConEng(c + 2, !1)), !1) : !0 } function CheckSetCenters(b, c, e, l) {
  e = e / 2 + l / 2 + 2;
  return c < e ? (alert("Set " + b + " Centers must be larger than " + ConEng(e, !1)), !1) : !0
}
var aSets, startRPM, sTotalRat;

function CalcSets() {
  isValid = !0;
  startRPM = parseCheck("txtSetRPM", "Initital Small RPM", 10, 2E4);
  if (isValid) {
    aSets = [];
    var b = Get32nds(null, "ddSet1SmallInches", "ddSet1SmallFrac"), c = Get32nds(null, "ddSet1LargeInches", "ddSet1LargeFrac");
    if (CheckSetDiam(1, b, c)) {
      var e = Get32nds(null, "ddSet1CentersInches", "ddSet1CentersFrac");
      if (CheckSetCenters(1, e, b, c) && (aSets.push(new PulleySet(b, c, e)), sTotalRat = c / b, b = Get32nds(null, "ddSet2SmallInches", "ddSet2SmallFrac"), c = Get32nds(null, "ddSet2LargeInches", "ddSet2LargeFrac"),
        CheckSetDiam(2, b, c) && (e = Get32nds(null, "ddSet2CentersInches", "ddSet2CentersFrac"), CheckSetCenters(2, e, b, c)))) {
        aSets.push(new PulleySet(b, c, e));
        sTotalRat *= c / b;
        var l = parseInt($("ddSets").value);
        if (2 < l) {
          b = Get32nds(null, "ddSet3SmallInches", "ddSet3SmallFrac");
          c = Get32nds(null, "ddSet3LargeInches", "ddSet3LargeFrac");
          if (!CheckSetDiam(3, b, c))
            return;
          e = Get32nds(null, "ddSet3CentersInches", "ddSet3CentersFrac");
          if (!CheckSetCenters(3, e, b, c))
            return;
          aSets.push(new PulleySet(b, c, e));
          sTotalRat *= c / b
        } if (3 < l) {
          b = Get32nds(null,
            "ddSet4SmallInches", "ddSet4SmallFrac");
          c = Get32nds(null, "ddSet4LargeInches", "ddSet4LargeFrac");
          if (!CheckSetDiam(4, b, c)) return;
          e = Get32nds(null, "ddSet4CentersInches", "ddSet4CentersFrac");
          if (!CheckSetCenters(4, e, b, c)) return;
          aSets.push(new PulleySet(b, c, e));
          sTotalRat *= c / b
        } $("rngSetsRPM").value = startRPM;
        DrawSets()
      }
    }
  }
}
function CalcCloseSets() {
  CalcSets();
  for (var b = 0;
    b < aSets.length;
    b++) {
    var c = aSets[b];
    Bind(null, "ddSet" + (b + 1) + "CentersInches", "ddSet" + (b + 1) + "CentersFrac", c.diamSmall / 2 + c.diamLarge / 2 + 32)
  } CalcSets()
}
function DrawSets() {
  for (var b = rotAngleSmallSet = isSetsRotating ? rotAngleSmallSet + rotIncSets : 0, c = 0, e = aSets.length, l = parseFloat(aSets[0].diamSmall / 2 + aSets[e - 1].diamLarge / 2), h = 0;
    h < e;
    h++)aSets[h].diamLarge > c && (c = aSets[h].diamLarge), l += parseFloat(aSets[h].centers);
  var k = $("cnvsPulleySets");
  k.width = parseFloat($("rngSetsScale").value);
  c = (k.width - 40) / c;
  var f = l * c;
  k.height = f + 30;
  var a = k.width / 2, n = f - parseFloat(aSets[0].diamSmall / 2 * c) + 20, d = k.getContext("2d");
  isSetsRotating && (b = rotAngleSmallSet);
  var p = "up" === $("ddSetsDiection").value ?
    startRPM * sTotalRat : startRPM;
  d.textAlign = "center";
  d.textBaseline = "middle";
  d.font = "10px Arial";
  for (h = 0;
    h < e;
    h++) {
    var m = aSets[h], t = m.diamSmall, v = m.diamLarge, u = m.centers, r = u * c, g = t / 2, q = v / 2, w = g * c, x = q * c, y = v / t;
    d.lineWidth = 1;
    d.strokeStyle = "#000";
    d.beginPath();
    d.arc(a, n, w, 0, RAD360, !0);
    d.stroke();
    d.fillStyle = "#e5e5e5";
    d.fill();
    d.beginPath();
    d.arc(a, n, 3, 0, RAD360, !0);
    d.stroke();
    d.fillStyle = "#fff";
    d.fill();
    d.save();
    d.translate(a, n);
    d.rotate(b);
    d.fillStyle = "#f00";
    d.fillText("RPM " + (10 > p ? RoundTo(p, 1) : Math.round(p)),
      0, -w / 2);
    d.fillStyle = "#000";
    d.fillText("D: " + ConEng(t, !1), 0, w / 2);
    d.restore();
    d.save();
    d.fillStyle = "#00f";
    d.fillText("Gap \u2191 " + ConEng(u - (q + g), !1), a, n - w - 4);
    d.fillStyle = "#548B54";
    d.fillText("Belt \u2191 " + ConEng(m.beltLength, !1), a, n + w + 6);
    d.restore();
    d.beginPath();
    d.moveTo(0, n);
    d.lineTo(10, n);
    d.strokeStyle = "silver";
    d.stroke();
    isSetsRotating && (b /= y);
    p /= y;
    n -= r;
    d.beginPath();
    d.arc(a, n, x, 0, RAD360, !0);
    d.strokeStyle = "#000";
    d.stroke();
    d.fillStyle = "#f5f5f5";
    d.fill();
    d.save();
    d.translate(a, n);
    d.rotate(b);
    d.fillStyle =
      "#f00";
    d.fillText("RPM " + (10 > p ? RoundTo(p, 1) : Math.round(p)), 0, -(v * c / 2) + 10);
    d.fillStyle = "#000";
    d.fillText("D: " + ConEng(v, !1), 0, x - 10);
    d.restore();
    d.beginPath();
    d.arc(a, n, 3, 0, RAD360, !0);
    d.stroke();
    d.fillStyle = "#fff";
    d.fill();
    m = 2 * Math.acos((q - g) / u);
    m = (RAD180 - m) / 2;
    d.beginPath();
    d.arc(a, n, x + 1, m, RAD180 - m, !0);
    d.arc(a, n + r, w + 1, RAD180 - m, m, !0);
    d.closePath();
    d.strokeStyle = "#080";
    d.lineWidth = 2;
    d.stroke();
    d.save();
    d.translate(5, n + u / 2 * c);
    d.rotate(RAD90);
    d.fillStyle = "#000";
    d.font = "11px Verdana";
    d.fillText("\u2190 " +
      ConEng(u, !1) + " \u2192", 0, 0);
    d.restore()
  } d.beginPath();
  d.moveTo(0, n);
  d.lineTo(10, n);
  d.strokeStyle = "silver";
  d.stroke();
  d.textAlign = "center";
  d.fillStyle = "#000";
  d.font = "11px Verdana";
  n = 20;
  d.beginPath();
  d.moveTo(k.width, n);
  d.lineTo(k.width - 20, n);
  n += l * c;
  d.moveTo(k.width, n);
  d.lineTo(k.width - 20, n);
  d.stroke();
  d.save();
  d.translate(k.width - 6, f / 2);
  d.rotate(RAD90);
  d.fillText("\u2190 " + ConEng(l, !1) + " \u2192", 0, 0);
  d.restore();
  d.fillText("Total Ratio 1 : " + RoundTo(sTotalRat, 2), a, 6)
}
function CalcCloseSets() {
  CalcSets();
  var b = Get32nds(null, "ddGapInches", "ddGapFrac");
  16 > b && (Bind(null, "ddGapInches", "ddGapFrac", 16), b = 16);
  for (var c = 0;
    c < aSets.length;
    c++) {
    var e = aSets[c];
    Bind(null, "ddSet" + (c + 1) + "CentersInches", "ddSet" + (c + 1) + "CentersFrac", e.diamSmall / 2 + e.diamLarge / 2 + b)
  } CalcSets()
}

class PulleySet {
  constructor(b, c, e) {
    this.diamSmall = b;
    this.diamLarge = c;
    this.centers = e;
    this.beltLength = 2 * e + 1.57 * (c + b) + Math.pow(c - b, 2) / (4 * e)
  }
}
function CallAnim(b) { requestAnimFrame(function () { Calculate(b) }) }
function CallAnimDraw() { requestAnimFrame(function () { Draw() }) } function CallAnimDrawFrom3() { requestAnimFrame(function () { DrawFrom3() }) } function CallAnimDrawSets() { requestAnimFrame(function () { DrawSets() }) };

var RAD = Math.PI / 180,
  RAD90 = Math.PI / 2,
  RAD180 = Math.PI,
  RAD270 = 1.5 * Math.PI,
  RAD360 = 2 * Math.PI,
  CON_MM3_M3 = 1E9,
  CON_32ND3_FT3 = 56623104,
  _isMobile = "undefined" !== typeof window.orientation,
  _canStore = "localStorage" in window && null !== window.localStorage;

function Menu_Select(a) { $(a).className = "menu-selected" }
window.addEventListener("load", function () { SetTitles(); var a, b = document.querySelectorAll("[type='range']"); for (a = 0; a < b.length; a++)null !== b[a].onchange && (b[a].oninput = b[a].onchange), b[a].addEventListener("keypress", c => { c.preventDefault() }), b[a].addEventListener("contextmenu", c => { c.currentTarget.type = "range" === c.currentTarget.type ? "number" : "range"; c.preventDefault() }); (new Image).src = "/images/Devil.gif"; $("__ddSavedCalcs") && _ShowSaved(); _isMobile && $("divMobile") && ($("divMobile").style.display = "block") });
function SetCookie(a, b, c) { var d = new Date; c = c || 365; d.setDate(d.getDate() + c); document.cookie = a + "=" + b + "; expires=" + d.toUTCString() + "; path=/" } function GetCookie(a) { a += "="; for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) { for (var d = b[c]; " " === d.charAt(0);)d = d.substring(1); if (0 === d.indexOf(a)) return d.substring(a.length, d.length) } return "" } function $(a) { return document.getElementById(a) }
function SetTitles() { for (var a = 0; a < document.images.length; a++)0 < document.images[a].alt.length && (document.images[a].title = document.images[a].alt) } function SetInput() { SetNumeric() } function SetNumeric() { for (var a = document.getElementsByTagName("input"), b = 0; b < a.length; b++) { var c = a[b]; "text" === c.type && (c.classList.contains("Num") || c.classList.contains("NumAbs") ? _isMobile ? c.type = "number" : c.onkeypress = CheckNumeric : c.classList.contains("Imp") && (_isMobile ? c.type = "tel" : c.onkeypress = CheckImperial)) } }
function CheckNumeric(a) { var b = a.key; if (/^(_n|n_|__)/.test(a.target.id) && "-" === b && 0 === a.target.value.length || 0 === a.target.id.indexOf("_") && "." === b && -1 === a.target.value.indexOf(".") || "Space" != a.code && 0 <= b && 10 > b) return !0; a.preventDefault() }
function CheckImperial(a) { var b = a.target, c = b.value.trim(), d = a.which; if (32 === d && 0 < c.length && " " !== b.value[b.selectionStart - 1] && " " !== b.value[b.selectionStart] || 47 < d && 58 > d || 8 === d || 46 === d && -1 === c.indexOf(".") && -1 === c.indexOf("/") && 0 < c.length || 47 === d && -1 === c.indexOf("/") && -1 === c.indexOf(".") && 0 < c.length) return !0; a.preventDefault() } top.location !== self.location && (top.location = self.location); var conMet = !1, _isConDec = !1, _conDecPrec = 2, _den = 32;
function ConEng(a, b = !1, c = _den, d = !1) {
  if (0 === a) return "0"; if (conMet) return Math.round(.79375 * a).toString(); if (_isConDec) return RoundTo(a / 32, _conDecPrec) + '"'; 32 !== c && (a *= c / 32); var e = !1; 0 > a && (a = Math.abs(a), e = !0); var g = Math.round(a); a = 0; b ? (a = Math.floor(g / (12 * c)), b = Math.floor(g / c) % 12) : b = Math.floor(g / c); if (3 === c) g = Math.round(g % 3); else for (g %= c; 0 === g % 2 && 1 < g;)g /= 2, c /= 2; var h = ""; 0 < a && (h = CommaFormat(a) + "'"); 0 < a && (0 < b || 0 < g) && (h += "- "); 0 < b && (h += CommaFormat(b)); 0 < b && 0 < g && (h += d ? " " : "~"); 0 < g && (c = g.toString() + "/" +
    c.toString(), d && (c = "<sup>" + f.replace("/", "</sup>/<sub>") + "</sub>"), h += c); if (0 < b || 0 < g) h += '"'; 0 === h.length && (h = "0"); e && (h = "-" + h); return h
}
function GoShare() { navigator.share && navigator.share({ text: "Check This Out!", title: document.title, url: window.location.href.split("?")[0] }) } function TellAFriend() { IsMobile() && navigator.share ? GoShare() : window.open(_ourl + "/tellfriend.aspx?ttl=" + escape(document.title), "", "height=480,width=650,scrollbars=0,resizable=1,status=0,toolbar=0,menubar=0,location=0").focus() }
function CommaFormat(a) { a = a.toString().split("."); a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); return a.join(".") } function FormatCurrency(a) { a = isNaN(a) || "" === a || null === a ? 0 : a; a = parseFloat(a).toFixed(2).split("."); return CommaFormat(a[0]) + "." + a[1] } var _isLogged = !1, _ourl = "https://www.blocklayer.com"; function LogUser(a, b, c) { _isLogged || (_isLogged = !0, navigator.sendBeacon("/Logger.ashx?a=" + a + "&p=" + (b || "0") + (c ? " " + location.pathname : ""))) }
function RoundTo(a, b) { if (0 === b) return Math.round(a); b = Math.pow(10, b); return Math.round(a * b) / b } function FindPos(a) { var b = 0, c = 0; if (a.offsetParent) { do b += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent) } return { top: c, left: b } } function SetEnter() { document.onkeydown = SetCalcEnter } function SetCalcEnter(a) { "Enter" === a.key && Calculate() } var _func = new Function(atob("UmVnRXhwKCdibG9ja2xheWVyLmNvbXx0cmFuc2xhdGV8d2ViY2FjaGUuZ29vZ2xldXNlcmNvbnRlbnQuY29tfGFyY2hpdmUub3JnJywnaScpLnRlc3QoZG9jdW1lbnQuZG9tYWluKSB8fCAoKG5ldyBJbWFnZSkuc3JjPSdodHRwczovL3d3dy5ibG9ja2xheWVyLmNvbS9Mb2dnZXIuYXNoeD9wPScrdG9wLmxvY2F0aW9uKycmYT1DUFlfR2VuJnA9Jytkb2N1bWVudC5kb21haW4sbG9jYXRpb24ucmVwbGFjZSgnaHR0cHM6Ly93d3cuYmxvY2tsYXllci5jb20/Y29weT0nK2RvY3VtZW50LmRvbWFpbikpOw=="));
_func(); var isValid = !0, _aLastValid = [];
function parseCheck(a, b, c, d, e) {
  e = e || !1; var g = $(a), h = parseFloat(g.value); if (isNaN(h) && (0 === c || e) || 0 === h && e) return g.value = e ? "" : "0", 0; if (isNaN(h) || h < c || h > d) b = b + " must be between " + c + " and " + d, e && (b += ", or leave empty"), $(a + "_Devil") ? (g.focus(), g.select()) : (e = _GetScreenCoords(g), c = new Image, c.src = "/images/Devil.gif", c.style.position = "absolute", c.style.top = e.y - 10 + "px", c.style.left = e.x + parseInt(g.getBoundingClientRect().width) - 6 + "px", c.title = b + "\n\nClick me to re-set last valid value: " + (_aLastValid[a] ||
    0), c.id = g.id + "_Devil", document.body.appendChild(c), c.onclick = function () { this.parentNode.removeChild(this); g.value = _aLastValid[a] || 0 }, g.focus(), g.select(), alert(b)), isValid = !1; else return $(a + "_Devil") && document.body.removeChild($(a + "_Devil")), _aLastValid[a] = h
}
function ConvertTo32ndsC(a, b, c, d, e) {
  a = $(a); e = a.value.trim(); var g = 0; if (0 === e.length) return 0; if (-1 < e.indexOf(".")) /\s/.test(e) && (e = e.replace(/\s/g, ""), a.value = e), g = 32 * e; else { -1 < e.indexOf("/") && (e = e.replace(/(\s+)?\/(\s+)?/g, " ")); var h = e.split(/\s+/g); 1 === h.length ? g = 32 * e : 2 === h.length && 1 < h[1] ? g = 32 / h[1] * h[0] : 3 === h.length && (g = 32 * h[0], g += 32 / h[2] * h[1]) } if (isNaN(g)) return alert("Invalid Entry"), a.focus(), a.select(), 0; if (g < c || g > d) b = b + " must be between " + ConEng(c, !1, 32) + " and " + ConEng(d, !1, 32), alert(b), a.focus(),
    a.select(), isValid = !1; else return g
}
function Get32nds(a, b, c) { var d = 0; null !== a && (d += 384 * parseFloat($(a).value)); null !== b && (d += 32 * parseFloat($(b).value)); null !== c && (d += parseFloat($(c).value)); return d } function ShowEl(a, b) { $(a).style.display = b ? "block" : "none" } function SetText(a, b) { $(a).innerHTML = b }
function GetState() { for (var a = "", b = $("form1"), c = /text|number|range|hidden/, d = /radio|checkbox/, e = 0; e < b.length; e++)if (-1 === b[e].id.indexOf("__")) { var g = b[e]; c.test(g.type) ? a += g.id + ":" + ("" === g.value ? "0" : g.value) + "," : d.test(g.type) ? a += g.id + (g.checked ? ":1" : ":0") + "," : "select-one" === g.type && (a += g.id + ":" + g.selectedIndex + ",") } a = a.substring(0, a.length - 1); return encodeURIComponent(a) }
function RestoreFromQs() { const a = new URLSearchParams(window.location.search); a.get("frm") && LoadForm(decodeURIComponent(a.get("frm"))) } function LoadForm(a) { if (null !== a && 0 < a.length) { var b = /text|number|range|hidden/, c = /radio|checkbox/; a = decodeURIComponent(a).split(","); for (var d = 0, e = 0; e < a.length; e++)try { var g = a[e].split(":"); if (0 < g[0].length) { var h = $(g[0]); b.test(h.type) ? h.value = g[1] : c.test(h.type) ? h.checked = "1" === g[1] ? "true" : "" : "select-one" === h.type && (h.selectedIndex = g[1]) } } catch (l) { d++ } } }
var _isShortening = !1;
function GetShortUrl2() {
  if (!_isShortening) {
    var a = new XMLHttpRequest; a.onreadystatechange = function () { 4 === this.readyState && 200 === this.status && ($("spnShortUrl").innerHTML = JSON.parse(this.responseText).shortLink, _isShortening = !1) }; a.open("POST", "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDzY3ostbNTDFgc9I1PHQiLm5a2g04dsCw", !0); a.setRequestHeader("Content-Type", "application/json"); var b = window.location.href.split("?")[0].split("#")[0] + "?frm=" + GetState(); $("spnShortUrl").innerHTML = "Please Wait...";
    a.send("{ 'longDynamicLink': 'https://apx6u.app.goo.gl/?link=" + b + "', 'suffix': { 'option': 'SHORT' } }"); _isShortening = !0
  }
}
function SendCalcMail(a) { window.open(_ourl + "/mailcalc.aspx?surl=" + a.innerHTML, "", "height=700,width=620,scrollbars=0,resizable=1,status=0,toolbar=0,menubar=0,location=0") } var _saved = "";
function _GetSavedCalc() { var a = new URLSearchParams(window.location.search); if (a.get("saved")) { a = decodeURIComponent(a.get("saved")); for (var b = 0; b < localStorage.length; b++) { var c = localStorage.key(b); if (c === a) { var d = localStorage.getItem(c).split("|"); if (d[0] === window.location.pathname) { LoadForm(d[1]); $("_btnRemoveSaved").style.display = "inline-block"; _saved = d[0] + "?saved=" + c; setTimeout(function () { $("__ddSavedCalcs").value = _saved }, 600); break } } } } }
function _SaveCalc() { var a = prompt("Save Current Calculation on this Device.\nPlease Enter Calculation Name:\n", "My Project"); "" !== a && null !== a && (a = a.trim(), "" !== a && (40 < a.length && (a = a.substring(0, 40), alert("Name trimmed to 40 characters " + a)), localStorage.setItem("bl_saved_" + a, window.location.pathname + "|" + GetState()), alert("Saved " + a), _saved = window.location.pathname + "?saved=bl_saved_" + a, _ShowSaved(), $("__ddSavedCalcs").value = _saved)) }
function _ShowSaved() { for (var a = $("__ddSavedCalcs"), b = a.options.length = 1, c = 0; c < localStorage.length; c++) { var d = localStorage.key(c); if (0 === d.indexOf("bl_saved_")) { var e = localStorage.getItem(d); e = e.substring(0, e.indexOf("|")); a.options[b++] = new Option(d.substring(9), e + "?saved=" + d) } } $("_divSaved").style.display = 1 < b ? "block" : "none" } function _GetSaved(a) { 0 < a.selectedIndex && location.replace(a.value) }
function _RemoveSaved() { if (0 < $("__ddSavedCalcs").selectedIndex) { var a = $("__ddSavedCalcs").value; localStorage.removeItem(a.substring(a.indexOf("=") + 1)); _saved = ""; _ShowSaved() } }
function _RemoveAllSaved() { if (confirm("Remove All Saved Calculations on this Device?")) { for (var a = [], b = 0; b < localStorage.length; b++)0 === localStorage.key(b).indexOf("bl_saved_") && a.push(localStorage.key(b)); for (b = 0; b < a.length; b++)localStorage.removeItem(a[b]); _saved = ""; $("__ddSavedCalcs").options.length = 1; $("_divSaved").style.display = "none" } }
function _SaveDef() { _canStore ? confirm("Set current inputs as default ?\nWhen you return to this page, last saved default will be restored.\nHit OK to Set Default or Cancel to Clear Default.") ? localStorage.setItem("bl_def_" + window.location.pathname, GetState()) : localStorage.removeItem("bl_def_" + window.location.pathname) : alert("Sorry, Storage is not available on this device") }
function _LoadDef() { if (_canStore) { var a = "bl_def_" + window.location.pathname; localStorage.getItem(a) && LoadForm(localStorage.getItem(a)) } } function IsMobile() { return "undefined" !== typeof window.orientation } var _regFormatRunHoriz = /<br>/g, _regFormatRunVert = /, /g; function FormatRun(a) { var b = a.innerHTML; -1 < b.indexOf(",") ? (b = b.replace(_regFormatRunVert, "<br>"), a.style.fontSize = "150%", a.style.lineHeight = "150%") : (b = b.replace(_regFormatRunHoriz, ", "), a.style.fontSize = "", a.style.lineHeight = ""); a.innerHTML = b }
function ExplainImperial() { alert("Enter measurements in Inches as either decimal or fraction with a space between inches and fraction, and a space or / in fraction.\n\neg:\n\n18.75\n18 3/4\n18 3 4\n\nare all equal to 18 and 3 quarter inches.") }
function OverrideLine() { CanvasRenderingContext2D.prototype._lineTo = CanvasRenderingContext2D.prototype.lineTo; CanvasRenderingContext2D.prototype.lineTo = function (a, b) { a = Math.floor(a) + .5; b = Math.floor(b) + .5; this._lineTo(a, b) }; CanvasRenderingContext2D.prototype._moveTo = CanvasRenderingContext2D.prototype.moveTo; CanvasRenderingContext2D.prototype.moveTo = function (a, b) { a = Math.floor(a) + .5; b = Math.floor(b) + .5; this._moveTo(a, b) } }
function OverrideRect() { CanvasRenderingContext2D.prototype._strokeRect = CanvasRenderingContext2D.prototype.strokeRect; CanvasRenderingContext2D.prototype.strokeRect = function (a, b, c, d) { a = Math.floor(a) + .5; b = Math.floor(b) + .5; this._strokeRect(a, b, Math.round(c), Math.round(d)) }; CanvasRenderingContext2D.prototype._fillRect = CanvasRenderingContext2D.prototype.fillRect; CanvasRenderingContext2D.prototype.fillRect = function (a, b, c, d) { a = Math.floor(a) + .5; b = Math.floor(b) + .5; this._fillRect(a, b, Math.round(c), Math.round(d)) } }
function _Pa(a) { return Math.floor(a) + .5 } function RunList(a) { a = encodeURIComponent($(a).innerHTML.replace(/<br>/g, ",").replace(/(<([^>]+)>|\s|&nbsp;)/ig, "").replace(/[\s]?to[\s]?/g, ",")); 2040 < a.length ? alert("Too many entries") : window.open("/run-list.aspx?rd=" + a) } String.prototype.toHHMMSS = function () { var a = parseInt(this, 10), b = Math.floor(a / 3600), c = Math.floor((a - 3600 * b) / 60); a = a - 3600 * b - 60 * c; 10 > b && (b = "0" + b); 10 > c && (c = "0" + c); 10 > a && (a = "0" + a); return b + ":" + c + ":" + a };
String.prototype.TrimEnd = function (a) { return this.length >= a ? this.substring(0, this.length - a) : "" }; Array.prototype.formatRunMet = function (a) { a = a || ", "; for (var b = "", c = 0; c < this.length; c++)b += Math.round(this[c]) + a; return b.TrimEnd(a.length) }; Array.prototype.formatRunImp = function (a, b) { b = b || ", "; for (var c = "", d = 0; d < this.length; d++)c += ConEng(this[d], a, 32) + b; return c.TrimEnd(b.length) }; Number.prototype.between = function (a, b) { var c = Math.max(a, b); return this > Math.min(a, b) && this < c };
function _PrintAllCanvas() { window.open("/print-diagrams.aspx", "PDF Print") } function Bind(a, b, c, d) { null !== a && BindFeet(a, d); null !== b && BindInch(b, d); null !== c && BindFrac(c, d) } function BindFeet(a, b) { a = $(a); a.selectedIndex = Math.floor(b / 384) - parseInt(a.options[0].value) } function BindInch(a, b) { a = $(a); var c = parseInt(a.options[0].value), d = parseInt(a.options[a.length - 1].value); a.selectedIndex = 0 === c && 11 === d ? Math.floor(b / 32 % 12) : Math.floor(b / 32) % (d + 1) - c }
function BindFrac(a, b) { a = $(a); a.selectedIndex = Math.floor(b % 32) / (32 / a.length) } function ColorInc(a, b) { a = parseInt(a, 16); var c = Math.round(2.55 * b); b = (a >> 16) + c; var d = (a >> 8 & 255) + c; a = (a & 255) + c; return "#" + (16777216 + 65536 * (255 > b ? 1 > b ? 0 : b : 255) + 256 * (255 > d ? 1 > d ? 0 : d : 255) + (255 > a ? 1 > a ? 0 : a : 255)).toString(16).slice(1) } function GetPrintedScale(a, b, c) { return b / (a * (c ? 96 / 25.4 : 3)) }
function GetSpokenImp(a, b) {
  var c = a; isNaN(c) || (c = ConEng(a, b, 32)); -1 < c.indexOf("'") && -1 < c.indexOf("/") && -1 === c.indexOf("~") && (c = c.replace("-", " and ")); c = c.replace("'", " feet "); c = c.replace("~", " and "); if (-1 < c.indexOf("/")) { a = c.substring(c.indexOf("/")); a = a.substring(0, a.indexOf('"')); b = ""; switch (a) { case "/2": b = " half"; break; case "/4": b = " quarter"; break; case "/8": b = " eighth"; break; case "/16": b = " sixteenths"; break; case "/32": b = " thirty seconds"; break; case "/64": b = " sixty fourths" }c = c.replace(a, b) } c =
    c.replace('"', " inches"); return c.replace("-", " ")
} function SetAnimFrame() { window.requestAnimFrame = function (a) { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b) { window.setTimeout(b, 1E3 / 60) } }() }
function SetImperialSelect() {
  for (var a = document.getElementsByTagName("select"), b = 0; b < a.length; b++) {
    var c = a[b]; if (c.getAttribute("data-type")) {
      var d, e = parseInt(c.getAttribute("data-from")) || 0, g = parseFloat(c.getAttribute("data-val")) || 0, h = c.getAttribute("data-type"); if ("Frac" === h) {
        h = parseInt(c.getAttribute("data-inc")) || 16; var l = 32 / h; var n = parseInt(c.getAttribute("data-to")) || h - 1; 0 === e && (c.options[0] = new Option("_", 0), e = 1); for (d = e; d <= n; d++) {
          e = ConEng(d * l, !1, 32).TrimEnd(1); 0 === d % h && (e += '"'); var k = new Option(e,
            d * l); 0 === d % 4 && (k.className = "FracOpt"); k.title = RoundTo(d * l / 32, 3) + '"'; c.options[c.options.length] = k
        } c.selectedIndex = g
      } else { n = parseFloat(c.getAttribute("data-to")) || 11; l = parseFloat(c.getAttribute("data-inc")) || 1; var m = ""; "Inch" === h ? m = '"' : "Feet" === h ? m = "'" : "Num" === h && (m = c.getAttribute("data-unit") || ""); for (d = e; d <= n; d += l)k = RoundTo(d, 4), k = new Option(0 === d ? "_" : k + m, k), c.options[c.options.length] = k, "Feet" === h && (k.title = 12 * d + '"'); c.selectedIndex = (g - e) / l }
    }
  }
}
function MinMax(a, b, c) { return Math.min(Math.max(a, b), c) } var _regFormatMetric = /(^|>|\s|\$)([\d\.,:]+)/g; function FormatMetric(a) { return a.replace(_regFormatMetric, "$1<span class='Atn'>$2</span>") } var _regFormatImp = /(^|>|\s|\$)([\.?\d]+['"\.-\s\d\/~:,]+)/g; function FormatImp(a) { return a.replace(_regFormatImp, "$1<span class='Atn'>$2</span>") }
function _GetScreenCoords(a) { for (var b = 0, c = 0; a !== document.body;)b += a.offsetLeft - a.scrollLeft + a.clientLeft, c += a.offsetTop - a.scrollTop + a.clientTop, a = a.offsetParent; return { x: b, y: c } } function GetUrlQR() { if ("undefined" === typeof QRCode) { var a = document.createElement("script"); a.setAttribute("type", "text/javascript"); a.src = "/Scripts/qr.js"; document.getElementsByTagName("head")[0].appendChild(a); a.onload = ShowUrlQR } else ShowUrlQR() }
function ShowUrlQR() { if (0 < $("divQRLink").innerHTML.length) $("divQRLink").innerHTML = ""; else { var a = window.location.href.split("?")[0].split("#")[0] + "?qr=1", b = document.createElement("div"); b.width = "200"; b.height = "200"; b.style.marginTop = "20px"; $("divQRLink").innerHTML = ""; $("divQRLink").appendChild(b); (new QRCode(b, { width: 200, height: 200 })).makeCode(a) } } var g_cnvss = 0, g_aCnvs;
function _CopyAllCanvas() {
  if (0 === g_cnvss) { g_aCnvs = document.getElementsByTagName("canvas"); g_cnvss = g_aCnvs.length; var a = $("divCopyCanvas"); document.body.appendChild(a.parentNode.removeChild(a)); a.style.display = "block" } if (50 > $("divCopyCanvasAll").children.length) {
    for (a = 0; a < g_cnvss; a++) {
      var b = g_aCnvs[a], c = document.createElement("canvas"), d = c.getContext("2d"); c.width = b.width; c.height = b.height; d.drawImage(b, 0, 0); c.title = "Click to remove"; c.setAttribute("onclick", "$('divCopyCanvasAll').removeChild(this)");
      $("divCopyCanvasAll").appendChild(c)
    } 0 === $("divCopyCanvasAll").children.length ? alert("No diagrams on this page to copy") : $("divCopyCanvas").scrollIntoView()
  } else alert("Max 50 copies")
} function _ClearAllCopyCanvas() { $("divCopyCanvasAll").innerHTML = ""; $("divCopyCanvas").style.display = "none"; g_cnvss = 0 } var _isAngleometer = !1;
function Angleometer() { var a = $("divAngleometer"); if (_isAngleometer) a.innerHTML = "", a.style.display = "none", _isAngleometer = !1; else { "function" === typeof DeviceMotionEvent.requestPermission && DeviceMotionEvent.requestPermission().then(c => { }).catch(console.error); var b = document.createElement("iframe"); b.setAttribute("style", "width:440px;height:440px;border:0;"); b.src = "/angleometer.html"; a.appendChild(b); a.style.display = "block"; _isAngleometer = !0 } } var _isCalculator = !1;
function Calculator() { var a = $("divCalculator"); if (_isCalculator) a.innerHTML = "", a.style.display = "none", _isCalculator = !1; else { a.style.display = "block"; var b = document.createElement("iframe"); b.setAttribute("style", "width:580px;height:800px;border:0;"); b.src = "/calculator.html?s=4"; a.appendChild(b); a.style.display = "block"; _isCalculator = !0 } }
function _GetPageFit(a, b, c = !1) {
  var d = 96 / 25.4; a /= d; b /= d; if (279 > a && 215 > b) { d = "Letter"; 210 > b && (d += " or A4"); var e = "l" } else 215 > a && 279 > b ? (d = "Letter", 210 > a && (d += " or A4"), e = "p") : 297 > a && 210 > b ? (d = "A4", e = "l") : 210 > a && 297 > b ? (d = "A4", e = "p") : 420 > a && 297 > b ? (d = "A3", e = "l") : 297 > a && 420 > b ? (d = "A3", e = "p") : 594 > a && 420 > b ? (d = "A2", e = "l") : 420 > a && 594 > b ? (d = "A2", e = "p") : 841 > a && 594 > b ? (d = "A1", e = "l") : 594 > a && 841 > b ? (d = "A1", e = "p") : 1189 > a && 841 > b ? (d = "A0", e = "l") : 841 > a && 1189 > b ? (d = "A0", e = "p") : 1414 > a && 1E3 > b ? (d = "B0", e = "l") : 1E3 > a && 1414 > b ? (d = "B0",
    e = "p") : (d = "B0+", e = a > b ? "l" : "p"); return d + ("l" === e ? " Landscape" : " Portrait") + (c ? " - " + Math.round(a) + " x " + Math.round(b) : "")
};
