characterSets = {
	"Hirigana" : [
		["",  "a", "i", "u", "e", "o", ""],
		["",  "あ", "い", "う", "え", "お", ""],
		["k", "か", "き", "く", "け", "こ", ""],
		["s", "さ", "し", "す", "せ", "そ", ""],
		["t", "た", "ち", "つ", "て", "と", ""],
		["n", "な", "に", "ぬ", "ね", "の", "ん"],
		["h", "は", "ひ", "ふ", "へ", "ほ", ""],
		["m", "ま", "み", "む", "め", "も", ""],
		["y", "や", "",  "ゆ", "",  "よ", ""],
		["r", "ら", "り", "る", "れ", "ろ", ""],
		["w", "わ", "ゐ", "",  "ゑ", "を", ""],
	],
	"Katakana" : [
		["",  "a", "i", "u", "e", "o", ""],
		["",  "ア", "イ", "ウ", "エ", "オ", ""],
		["k", "カ", "キ", "ク", "ケ", "コ", ""],
		["s", "サ", "シ", "ス", "セ", "ソ", ""],
		["t", "タ", "チ", "ツ", "テ", "ト", ""],
		["n", "ナ", "ニ", "ヌ", "ネ", "ノ", "ン"],
		["h", "ハ", "ヒ", "フ", "ヘ", "ホ", ""],
		["m", "マ", "ミ", "ム", "メ", "モ", ""],
		["y", "ヤ", "",  "ユ", "",  "ヨ", ""],
		["r", "ラ", "リ", "ル", "レ", "ロ", ""],
		["w", "ワ", "ヰ", "",  "ヱ", "ヲ", ""],
	],
	"Romanized" : [
		["",  "a",  "i",  "u",  "e",  "o", ""],
		["",  "a",  "i",  "u",  "e",  "o", ""],
		["k", "ka", "ki", "ku", "ke", "ko", ""],
		["s", "sa", "shi", "su", "se", "so", ""],
		["t", "ta", "chi", "tsu", "te", "to", ""],
		["n", "na", "ni", "nu", "ne", "no", "n"],
		["h", "ha", "hi", "fu", "he", "ho", ""],
		["m", "ma", "mi", "mu", "me", "mo", ""],
		["y", "ya", "",   "yu", "",   "yo", ""],
		["r", "ra", "ri", "ru", "re", "ro", ""],
		["w", "wa", "*(w)i", "",  "*(w)e", "(w)o", ""],
	]
};

characterSetsSpecialHirigana = {
	"Hirigana":[
		["","a","i","u","e","o"],
		["p","ぱ","ぴ","ぷ","ぺ","ぽ"],
		["b","ば","び","ぶ","べ","ぼ"],
		["d","だ","ぢ","づ","で","ど"],
		["z","ざ","じ","ず","ぜ","ぞ"],
		["g","が","ぎ","ぐ","げ","ご"]
	],
	"Romanized":[
		["","a","i","u","e","o"],
		["p","pa","pi","pu","pe","po"],
		["b","ba","bi","bu","be","bo"],
		["d","da","ji","dzu","de","do"],
		["z","za","ji","zu","ze","zo"],
		["g","ga","gi","gu","ge","go"]
	]
};

characterSetsSpecialKatakana = {
	"Katakana":[
		["","a","i","u","e","o"],
		["p","パ","ピ","プ","ペ","ポ"],
		["b","バ","ビ","ブ","ベ","ボ"],
		["d","ダ","ヂ","ヅ","デ","ド"],
		["z","ザ","ジ","ズ","ゼ","ゾ"],
		["g","ガ","ギ","グ","ゲ","ゴ"]
	],
	"Romanized":[
		["","a","i","u","e","o"],
		["p","pa","pi","pu","pe","po"],
		["b","ba","bi","bu","be","bo"],
		["d","da","ji","dzu","de","do"],
		["z","za","ji","zu","ze","zo"],
		["g","ga","gi","gu","ge","go"]
	]
};

characterSetsSpecialKatakanaSmall = {
	"Katakana":[
		["", "a", "i", "u", "e", "o"],
		["v", "ヴァ", "ヴィ", "ヴ", "ヴェ", "ヴォ"],
		["w", "ワ", "ウィ", "ウ", "ウェ", "ウォ"],
		["f", "ファ", "フィ", "フ", "フェ", "フォ"],
		["ch", "チャ", "チ", "チュ", "チェ", "チョ"],
		["d", "ダ", "ディ", "ドゥ", "デ", "ド"],
		["t", "タ", "ティ", "トゥ", "テ", "ト"],
		["j", "ジャ", "ジ", "ジュ", "ジェ", "ジョ"],
		["sh", "シャ", "シ", "シュ", "シェ", "ショ"],
	],
	"Romanized":[
		["", "a", "i", "u", "e", "o"],
		["v", "va", "vi", "vu", "ve", "vo"],
		["w", "wa", "wi", "[w]u", "we", "wo"],
		["f", "fa", "fi", "fu", "fe", "fo"],
		["ch", "cha", "chi", "chu", "che", "cho"],
		["d", "da", "di", "du", "de", "do"],
		["t", "ta", "ti", "tu", "te", "to"],
		["j", "ja", "ji", "ju", "je", "jo"],
		["sh", "sha", "shi", "shu", "she", "sho"],
	]
};

characterSetList = {
	"" : characterSets,
	"*Hirigana Special" : characterSetsSpecialHirigana,
	"*Katakana Special" : characterSetsSpecialKatakana,
	"*Katakana Small" : characterSetsSpecialKatakanaSmall
};

characterSelection = null;
characterSelectionDivs = null;

maxResults = 8;
results = [];

currentTestSet = [];
currentTestIndex = -1;
currentSyllabary = "-" + (function(){for (var k in characterSets) return k;})();
epochSetCount = 0;

epochSet = [];
totalTests = 0;
totalEpoch = 0;
totalCorrect = 0;
epochCorrect = 0;
epochPerfect = 0;

languageSelections = {};

$(document).ready(function () {
	$("#noscript_warning").css("display", "none");
	$("#main").css("display", "");

	$("#input_form").submit(onFormSubmit);

	$("#start").click(onStart);

	$("#selection").css("display", "");
	$("#execution").css("display", "none");

	$("#return_link").click(function () {
		$("#selection").css("display", "");
		$("#execution").css("display", "none");

		while (results.length > 0) {
			results.shift().remove();
		}
	});

	$("#epoch_set_count").val(epochSetCount);
	$("#epoch_set_count").change(function () {
		onEpochUpdate(
			Math.max(0, Math.floor(parseInt($(this).val())))
		);
		reset();
	});
	$("#options").click(function () {
		$("#options_div").css("display", ($("#options_div").css("display") == "none" ? "inline-block" : "none"));
	});

	var o = $("#syllabary_selector");
	o.html("");
	var e1, e2;
	for (var listKey in characterSetList) {
		for (var key in characterSetList[listKey]) {
			if (key.toLowerCase() == "romanized") break;

			var cKey = listKey + "-" + key;
			var dKey = listKey;
			if (dKey.length > 0) {
				if (dKey.search(/\*/g) >= 0) {
					dKey = dKey.replace(/\*/g, "");
				}
				else {
					dKey += " / " + key;
				}
			}
			else {
				dKey = key;
			}

			e1 = $(document.createElement("div"));
			e1.addClass("SyllabarySelectorDiv");
			o.append(e1);

			e2 = $(document.createElement("a"));
			e2.addClass(currentSyllabary == cKey ? "SyllabarySelectorOn" : "SyllabarySelector");
			e2.html(dKey);
			e1.append(e2);

			languageSelections[cKey] = e2;
			e2.click({key: cKey}, function (event) {
				if (currentSyllabary == event.data.key) return;
				languageSelections[currentSyllabary].addClass("SyllabarySelector");
				languageSelections[currentSyllabary].removeClass("SyllabarySelectorOn");
				currentSyllabary = event.data.key;
				languageSelections[currentSyllabary].addClass("SyllabarySelectorOn");
				languageSelections[currentSyllabary].removeClass("SyllabarySelector");

				for (var o in characterSelectionDivs) {
					if (o == event.data.key) {
						characterSelectionDivs[o].css("display", "");
					}
					else {
						characterSelectionDivs[o].css("display", "none");
					}
				}
			});
		}
	}

	onEpochUpdate(1);

	setupCharacterSelection();
});

function onEpochUpdate(epochCount) {
	epochSetCount = epochCount;

	$("#epoch_set_count").val(epochSetCount);

	if (epochSetCount == 0) {
		$("#epoch_label").html("Total");
		$("#total_tries_container").css("display", "none");
		$("#perfect_count").css("display", "none");
		$("#total_tests").css("display", "none");
	}
	else {
		$("#epoch_label").html("Epoch");
		$("#total_tries_container").css("display", "");
		$("#perfect_count").css("display", "");
		$("#total_tests").css("display", "");
	}
}

function onStart(event) {

	// Setup language
	// <nothing to do>

	// Setup test characters
	currentTestSet = [];
	var i, j;
	for (var k in characterSelection) {
		var ks = k.split("-");
		for (j = 0; j < characterSelection[k].length; ++j) {
			for (i = 0; i < characterSelection[k][j].length; ++i) {
				if (!characterSelection[k][j][i].hasClass("SelectionDisabled") && characterSelection[k][j][i].hasClass("SelectionOn")) {
					// Add
					currentTestSet.push(
						[ characterSetList[ks[0]][ks[1]][i + 1][j + 1] , characterSetList[ks[0]]["Romanized"][i + 1][j + 1] ]
					);
				}
			}
		}
	}

	if (currentTestSet.length <= 0) return;

	$("#selection").css("display", "none");
	$("#execution").css("display", "");

	reset();
}

function reset() {
	epochSet = [];
	totalTests = 0;
	totalEpoch = 0;
	totalCorrect = 0;
	epochCorrect = 0;
	epochPerfect = 0;
	selectTestCharacter();
}

function formatRomanized(str) {
	return str.replace(/\*/g, "").replace(/\((.*?)\)/g, "<span class=\"SelectionDescriptionSilent\">$1</span>").replace(/\[(.*?)\]/g, "<span class=\"SelectionDescriptionSilent\">$1</span>");
}

function formatRomanizedResult(str, good) {
	return str.replace(/\*/g, "").replace(/\((.*?)\)/g, "<span class=\"" + (good ? "ResultGoodActualSilent" : "ResultBadActualSilent") + "\">$1</span>").replace(/\[(.*?)\]/g, "<span class=\"" + (good ? "ResultGoodActualSilent" : "ResultBadActualSilent") + "\">$1</span>");
}

function setupCharacterSelection() {
	var o;
	var i, j;
	var e1, e2, e3, e4;
	var blank, inset;

	characterSelection = {};
	characterSelectionDivs = {};

	$("#character_selection").html("");
	for (var listKey in characterSetList) {
		for (var key in characterSetList[listKey]) {
			if (key.toLowerCase() == "romanized") break;

			var cKey = listKey + "-" + key;

			characterSelection[cKey] = [];

			o = $(document.createElement("div"));
			o.css("display", (currentSyllabary == cKey ? "" : "none"));
			characterSelectionDivs[cKey] = o;

			e1 = $(document.createElement("div"));
			e1.addClass("SelectionRowContainer");
			o.append(e1);

			e2 = $(document.createElement("div"));
			e2.addClass("SelectionCellContainer");
			e1.append(e2);

			e3 = $(document.createElement("a"));
			e3.addClass("SelectionCross");
			e2.append(e3);
			e3.click({"key": cKey, col: -1, row: -1}, onMultiSelectionUpdate);

			// Column headers
			for (i = 1; i < characterSetList[listKey][key].length; ++i) {
				e2 = $(document.createElement("div"));
				e2.addClass("SelectionCellContainer");
				e1.append(e2);

				e3 = $(document.createElement("a"));
				e3.addClass("SelectionColumnLabel");
				e3.html(characterSetList[listKey][key][i][0]);
				e2.append(e3);
				e3.click({"key": cKey, col: i - 1, row: -1}, onMultiSelectionUpdate);
			}

			// Rows
			for (j = 1; j < characterSetList[listKey][key][0].length; ++j) {
				e1 = $(document.createElement("div"));
				e1.addClass("SelectionRowContainer");
				o.append(e1);

				e2 = $(document.createElement("div"));
				e2.addClass("SelectionCellContainer");
				e1.append(e2);

				e3 = $(document.createElement("a"));
				e3.addClass("SelectionRowLabel");
				e3.html(characterSetList[listKey][key][0][j]);
				e2.append(e3);
				e3.click({"key": cKey, col: -1, row: j - 1}, onMultiSelectionUpdate);

				characterSelection[cKey].push([]);

				for (i = 1; i < characterSetList[listKey][key].length; ++i) {
					blank = characterSetList[listKey][key][i][j] == "";
					inset = false; // currentTestSet

					e2 = $(document.createElement("div"));
					e2.addClass("SelectionCellContainer");
					e1.append(e2);

					e3 = $(document.createElement(blank ? "div" : "a"));
					e3.addClass(blank ? "SelectionDisabled" : (inset ? "SelectionOn" : "SelectionOff"));
					e2.append(e3);

					characterSelection[cKey][characterSelection[cKey].length - 1].push(e3);

					if (blank) continue;

					if (characterSetList[listKey]["Romanized"][i][j].indexOf("*") >= 0) {
						e3.addClass("SelectionObsolete");
					}
					e3.click({"key": cKey, col: i - 1, row: j - 1}, onSelectionUpdate);

					e4 = $(document.createElement("div"));
					e4.addClass("SelectionCharacter");
					e4.html(formatRomanized(characterSetList[listKey][key][i][j]));
					e3.append(e4);

					e4 = $(document.createElement("div"));
					e4.addClass("SelectionDescription");
					e4.html(formatRomanized(characterSetList[listKey]["Romanized"][i][j]));
					e3.append(e4);
				}
			}

			// Apply
			$("#character_selection").append(o);
		}
	}
}

function onMultiSelectionUpdate(event) {
	var k = event.data.key;
	var i, i1, i2;
	var j, j1, j2;
	var b;
	var status = false;

	if (event.data.col < 0) {
		i1 = 0;
		i2 = characterSelection[k][0].length - 1;
	}
	else {
		i1 = i2 = event.data.col;
	}
	if (event.data.row < 0) {
		j1 = 0;
		j2 = characterSelection[k].length - 1;
	}
	else {
		j1 = j2 = event.data.row;
	}

	for (j = j1; j <= j2; ++j) {
		for (i = i1; i <= i2; ++i) {
			if (!characterSelection[k][j][i].hasClass("SelectionDisabled") && !characterSelection[k][j][i].hasClass("SelectionObsolete")) {
				b = characterSelection[k][j][i].hasClass("SelectionOff");
				status |= b;
			}
		}
	}

	// Update
	for (j = j1; j <= j2; ++j) {
		for (i = i1; i <= i2; ++i) {
			if (!characterSelection[k][j][i].hasClass("SelectionDisabled") && (!characterSelection[k][j][i].hasClass("SelectionObsolete") || !status)) {
				updateSelection(characterSelection[k][j][i], status);
			}
		}
	}
}

function updateSelection(o, forceMode) {
	if (forceMode == undefined) forceMode = o.hasClass("SelectionOff");

	if (forceMode) {
		o.addClass("SelectionOn");
		o.removeClass("SelectionOff");
	}
	else {
		o.addClass("SelectionOff");
		o.removeClass("SelectionOn");
	}
}

function onSelectionUpdate(event) {
	updateSelection($(this));
}

function selectTestCharacter() {
	updatePercents();

	if (epochSetCount > 0) {
		if (epochSet.length == 0) {
			epochCorrect = 0;
			totalEpoch = 0;
			// Generate new epoch
			for (var i = 0; i < epochSetCount; ++i) {
				for (var j = 0; j < currentTestSet.length; ++j) {
					epochSet.push(j);
				}
			}
		}

		// Select
		var id = Math.floor(Math.random() * epochSet.length);
		currentTestIndex = epochSet[id];
		epochSet.splice(id, 1);
		$("#TargetSymbol").html(currentTestSet[currentTestIndex][0]);
		return;
	}

	var id = Math.floor(Math.random() * currentTestSet.length);
	if (id == currentTestIndex) {
		id = Math.floor(Math.random() * (currentTestSet.length - 1));
		if (id >= currentTestIndex) id = (id + 1) % currentTestSet.length;
	}
	currentTestIndex = id;

	$("#TargetSymbol").html(currentTestSet[currentTestIndex][0]);
}

function compareResults(input, desired) {
	return (input == desired.replace(/\*/g, "").replace(/\((.*?)\)/g, "$1").replace(/\[(.*?)\]/g, ""));
}

function onFormSubmit() {
	var val = $("#textbox").val().trim().toLowerCase();

	if (val != "") {
		++totalTests;
		if (epochSetCount > 0) ++totalEpoch;

		var okay = compareResults(val, currentTestSet[currentTestIndex][1]);

		if (okay) {
			++totalCorrect;
			++epochCorrect;
			if (epochSetCount > 0 && epochSet.length == 0 && epochCorrect == totalEpoch) {
				++epochPerfect;
			}
		}

		addResult(currentTestSet[currentTestIndex][0], val, currentTestSet[currentTestIndex][1], okay);

		$("#textbox").val("");

		selectTestCharacter();
	}

	return false;
}

function addResult(actual, input, answer, good) {
	var e1 = $(document.createElement("div"));
	e1.addClass("ResultContainer");

	var e2 = $(document.createElement("div"));
	e2.addClass("ResultSeparator1");
	e2.css("display", "none");
	e1.append(e2);

	var e3 = $(document.createElement("div"));
	e3.addClass("ResultSeparator2");
	e2.append(e3);

	e2 = $(document.createElement("div"));
	e2.addClass(good ? "ResultGood" : "ResultBad");
	e1.append(e2);

	e3 = $(document.createElement("span"));
	e3.addClass(good ? "ResultGoodCharacter" : "ResultBadCharacter");
	e3.html(actual);
	e2.append(e3);

	e3 = $(document.createElement("span"));
	e3.addClass(good ? "ResultGoodActual" : "ResultBadActual");
	e3.html(formatRomanizedResult(answer, good));
	e2.append(e3);

	if (!good) {
		e3 = $(document.createElement("span"));
		e3.addClass("ResultBadResponse");
		e3.html("(" + input + ")");
		e2.append(e3);
	}

	$("#results_container").prepend(e1);

	if (results.length > 0) {
		results[results.length - 1].find("div").css("display", "");
	}
	if (results.length >= maxResults) {
		results.shift().remove();
	}
	results.push(e1);
}

function updatePercents() {
	var perc = (totalTests == 0 ? 0 : (Math.round(totalCorrect / totalTests * 100)));
	var c = (totalTests == 0 ? "PercentageUnset" : (perc < 25 ? "PercentageBad" : (perc < 50 ? "PercentageOkay" : (perc < 75 ? "PercentageGood" : "PercentageGreat"))));
	$("#percent_correct_overall").html(perc);
	$("#percent_correct_overall").removeClass("PercentageUnset PercentageGreat PercentageGood PercentageOkay PercentageBad").addClass(c);

	$("#total_test_count").html(totalTests);

	if (epochSetCount != 0) {
		if (totalEpoch == 0) {
			perc = "PercentageUnset";
		}
		else {
			perc = Math.round(epochCorrect / totalEpoch * 100)
			c = (perc < 25 ? "PercentageBad" : (perc < 50 ? "PercentageOkay" : (perc < 75 ? "PercentageGood" : "PercentageGreat")));
		}
	}

	$("#percent_correct_epoch").html(epochCorrect);
	$("#percent_correct_epoch").removeClass("PercentageUnset PercentageGreat PercentageGood PercentageOkay PercentageBad").addClass(c);
	$("#percent_epoch").html(epochSetCount == 0 ? totalTests : totalEpoch);
	$("#total_tries").html(epochSetCount * currentTestSet.length);

	if (epochPerfect == 0) {
		$("#perfect_count").css("display", "none");
	}
	else {
		$("#perfect_count").css("display", "");
		$("#perfect_count").html("(" + epochPerfect + " perfect" + (epochPerfect == 1 ? "" : "s") + ")");
	}
}

