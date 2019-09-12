var controls = function () {
	
	var loadPrefs = function() {
		$('#settings .custom-size-w').val(fwt.getWidth());
		$('#settings .custom-size-h').val(fwt.getHeight());
		$('#settings .custom-level-s').val(fwt.getLevel());
		if (fwt.getShadeEnabled())
			$("#settings #shades .alternate.true").addClass('s');
		else
			$("#settings #shades .alternate.false").addClass('s');
		if (fwt.getInvisibleEnabled())
			$("#settings #invisibles .alternate.true").addClass('s');
		else
			$("#settings #invisibles .alternate.false").addClass('s');
		$('#settings #themes .alternate[data-value="'+fwt.getColorTheme()+'"]').addClass('s');
		$('#settings #speed .alternate[data-value="'+fwt.getSpeed()+'"]').addClass('s');
		$('#settings #rotation .alternate[data-value="'+fwt.getRotation()+'"]').addClass('s');
		if (fwt.getSp1()) {$("#settings #set .alternate.opt.sp1").addClass('s');}
		if (fwt.getSp2()) {$("#settings #set .alternate.opt.sp2").addClass('s');}
		if (fwt.getSp3()) {$("#settings #set .alternate.opt.sp3").addClass('s');}
		if (fwt.getSp4()) {$("#settings #set .alternate.opt.sp4").addClass('s');}
		if (fwt.getSp5()) {$("#settings #set .alternate.opt.sp5").addClass('s');}
		if (fwt.getSp6()) {$("#settings #set .alternate.opt.sp6").addClass('s');}
		if (fwt.getSp7()) {$("#settings #set .alternate.opt.sp7").addClass('s');}
		if (fwt.getSp8()) {$("#settings #set .alternate.opt.sp8").addClass('s');}
		if (fwt.getSp9()) {$("#settings #set .alternate.opt.sp9").addClass('s');}
		if (fwt.getSp10()) {$("#settings #set .alternate.opt.sp10").addClass('s');}
		if (fwt.getSp11()) {$("#settings #set .alternate.opt.sp11").addClass('s');}
		if (fwt.getSp12()) {$("#settings #set .alternate.opt.sp12").addClass('s');}
		if (fwt.getSp13()) {$("#settings #set .alternate.opt.sp13").addClass('s');}
		if (fwt.getSp14()) {$("#settings #set .alternate.opt.sp14").addClass('s');}
		if (fwt.getSp15()) {$("#settings #set .alternate.opt.sp15").addClass('s');}
		if (fwt.getSp16()) {$("#settings #set .alternate.opt.sp16").addClass('s');}
		if (fwt.getSp17()) {$("#settings #set .alternate.opt.sp17").addClass('s');}
		if (fwt.getSp18()) {$("#settings #set .alternate.opt.sp18").addClass('s');}
		if (fwt.getSp19()) {$("#settings #set .alternate.opt.sp19").addClass('s');}
		if (fwt.getSp20()) {$("#settings #set .alternate.opt.sp20").addClass('s');}
		if (fwt.getSp21()) {$("#settings #set .alternate.opt.sp21").addClass('s');}
		if (fwt.getSp22()) {$("#settings #set .alternate.opt.sp22").addClass('s');}
		if (fwt.getSp23()) {$("#settings #set .alternate.opt.sp23").addClass('s');}
		if (fwt.getSp24()) {$("#settings #set .alternate.opt.sp24").addClass('s');}
		if (fwt.getSp25()) {$("#settings #set .alternate.opt.sp25").addClass('s');}
		if (fwt.getSp26()) {$("#settings #set .alternate.opt.sp26").addClass('s');}
		if (fwt.getSp27()) {$("#settings #set .alternate.opt.sp27").addClass('s');}
		if (fwt.getSp28()) {$("#settings #set .alternate.opt.sp28").addClass('s');}
		if (fwt.getSp29()) {$("#settings #set .alternate.opt.sp29").addClass('s');}
		if (fwt.getSp30()) {$("#settings #set .alternate.opt.sp30").addClass('s');}
		if (fwt.getSp31()) {$("#settings #set .alternate.opt.sp31").addClass('s');}

		$('#settings #sizes .val').removeClass('not1 not2');
	}

	// Shades:
	$("#settings #shades .alternate.false").click(function(){
		$(this).addClass('s');
		$(this).parent().children(".true").removeClass('s');
		fwt.switchShades(false);
	});
	$("#settings #shades .alternate.true").click(function(){
		$(this).addClass('s');
		$(this).parent().children(".false").removeClass('s');
		fwt.switchShades(true);
	});

	// Invisible:
	$("#settings #invisibles .alternate.false").click(function(){
		$(this).addClass('s');
		$(this).parent().children(".true").removeClass('s');
		fwt.switchInvisibles(false);
		ui.stopGame();
	});
	$("#settings #invisibles .alternate.true").click(function(){
		$(this).addClass('s');
		$(this).parent().children(".false").removeClass('s');
		fwt.switchInvisibles(true);
		ui.stopGame();
	});

	// Themes:
	$("#settings #themes .alternate.opt").click(function(){
		$("#settings #themes .alternate").removeClass('s');
		$(this).addClass('s');
		fwt.switchTheme($(this).attr("data-value"));
		fwt.repaintNextPiece();
	});
	
	// Speed:
	$("#settings #speed .alternate.opt").click(function(){
		$("#settings #speed .alternate").removeClass('s');
		$(this).addClass('s');
		fwt.switchSpeed($(this).attr("data-value"));
		ui.stopGame();
	});
	
	// Piece Selection:
	$("#settings #set .alternate.opt.sp1").click(function(){
		if (fwt.getSp1()) {
			$(this).removeClass('s');
			fwt.switchSp1(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp1(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp2").click(function(){
		if (fwt.getSp2()) {
			$(this).removeClass('s');
			fwt.switchSp2(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp2(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp3").click(function(){
		if (fwt.getSp3()) {
			$(this).removeClass('s');
			fwt.switchSp3(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp3(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp4").click(function(){
		if (fwt.getSp4()) {
			$(this).removeClass('s');
			fwt.switchSp4(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp4(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp5").click(function(){
		if (fwt.getSp5()) {
			$(this).removeClass('s');
			fwt.switchSp5(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp5(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp6").click(function(){
		if (fwt.getSp6()) {
			$(this).removeClass('s');
			fwt.switchSp6(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp6(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp7").click(function(){
		if (fwt.getSp7()) {
			$(this).removeClass('s');
			fwt.switchSp7(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp7(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp8").click(function(){
		if (fwt.getSp8()) {
			$(this).removeClass('s');
			fwt.switchSp8(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp8(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp9").click(function(){
		if (fwt.getSp9()) {
			$(this).removeClass('s');
			fwt.switchSp9(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp9(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp10").click(function(){
		if (fwt.getSp10()) {
			$(this).removeClass('s');
			fwt.switchSp10(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp10(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp11").click(function(){
		if (fwt.getSp11()) {
			$(this).removeClass('s');
			fwt.switchSp11(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp11(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp12").click(function(){
		if (fwt.getSp12()) {
			$(this).removeClass('s');
			fwt.switchSp12(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp12(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp13").click(function(){
		if (fwt.getSp13()) {
			$(this).removeClass('s');
			fwt.switchSp13(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp13(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp14").click(function(){
		if (fwt.getSp14()) {
			$(this).removeClass('s');
			fwt.switchSp14(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp14(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp15").click(function(){
		if (fwt.getSp15()) {
			$(this).removeClass('s');
			fwt.switchSp15(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp15(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp16").click(function(){
		if (fwt.getSp16()) {
			$(this).removeClass('s');
			fwt.switchSp16(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp16(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp17").click(function(){
		if (fwt.getSp17()) {
			$(this).removeClass('s');
			fwt.switchSp17(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp17(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp18").click(function(){
		if (fwt.getSp18()) {
			$(this).removeClass('s');
			fwt.switchSp18(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp18(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp19").click(function(){
		if (fwt.getSp19()) {
			$(this).removeClass('s');
			fwt.switchSp19(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp19(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp20").click(function(){
		if (fwt.getSp20()) {
			$(this).removeClass('s');
			fwt.switchSp20(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp20(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp21").click(function(){
		if (fwt.getSp21()) {
			$(this).removeClass('s');
			fwt.switchSp21(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp21(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp22").click(function(){
		if (fwt.getSp22()) {
			$(this).removeClass('s');
			fwt.switchSp22(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp22(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp23").click(function(){
		if (fwt.getSp23()) {
			$(this).removeClass('s');
			fwt.switchSp23(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp23(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp24").click(function(){
		if (fwt.getSp24()) {
			$(this).removeClass('s');
			fwt.switchSp24(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp24(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp25").click(function(){
		if (fwt.getSp25()) {
			$(this).removeClass('s');
			fwt.switchSp25(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp25(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp26").click(function(){
		if (fwt.getSp26()) {
			$(this).removeClass('s');
			fwt.switchSp26(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp26(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp27").click(function(){
		if (fwt.getSp27()) {
			$(this).removeClass('s');
			fwt.switchSp27(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp27(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp28").click(function(){
		if (fwt.getSp28()) {
			$(this).removeClass('s');
			fwt.switchSp28(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp28(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp29").click(function(){
		if (fwt.getSp29()) {
			$(this).removeClass('s');
			fwt.switchSp29(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp29(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp30").click(function(){
		if (fwt.getSp30()) {
			$(this).removeClass('s');
			fwt.switchSp30(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp30(true);
		}
		ui.stopGame();
	});
	$("#settings #set .alternate.opt.sp31").click(function(){
		if (fwt.getSp31()) {
			$(this).removeClass('s');
			fwt.switchSp31(false);
		} else {
			$(this).addClass('s');
			fwt.switchSp31(true);
		}
		ui.stopGame();
	});

	// Rotation:
	$("#settings #rotation .alternate.opt").click(function(){
		$("#settings #rotation .alternate").removeClass('s');
		$(this).addClass('s');
		fwt.switchRotation($(this).attr("data-value"));
	});

	// Sizes:
	$("#settings #sizes .custom-size-w").keyup(function(){
		w = $(this).val();
		if (isNaN(w) || w < 1 || w > 100) {
			$('#settings #sizes .val').addClass('not1');
			fwt.setWidth(10);
		} else {
			$('#settings #sizes .val').removeClass('not1');
			fwt.setWidth(w);
		}
		ui.stopGame();
	});

	$("#settings #sizes .custom-size-h").keyup(function(){
		h = $(this).val();
		if (isNaN(h) || h < 1 || h > 100) {
			$('#settings #sizes .val').addClass('not2');
			fwt.setHeight(24);
		} else {
			$('#settings #sizes .val').removeClass('not2');
			fwt.setHeight(h);
		}
		ui.stopGame();
	});
	
	// Level Customization:
	$("#settings #startlevel .custom-level-s").keyup(function(){
		s = $(this).val();
		if (isNaN(s) || s < 0 || s > 999) {
			$('#settings #startlevel .val').addClass('not1');
			fwt.setLevel(0);
		} else {
			$('#settings #startlevel .val').removeClass('not1');
			fwt.setLevel(s);
		}
		ui.stopGame();
	});

	this.loadPrefs = loadPrefs;
}

var cmd = new controls();