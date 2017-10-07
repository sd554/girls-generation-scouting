window.$ = window.jQuery = require('jquery');
var scout = require("scouting")

scout.init('stand')

scout.page('Login',[12]);
scout.page('Auto',[4,4,4]);
scout.page('Tele',[4,4,4]);
scout.page('Post Match',[6,6]);
scout.page('Save',[12]);

scout.login('.cell-login-1');

scout.multipleChoice(
	'.cell-auto-1',
    'Cross-Line',
    [
    	// Name, bootstrap color class, OPTIONAL: value
    	['yes', 'success'],
    	['no', 'danger']
    ],
    'cross_auto'
);

scout.multipleChoice(
	'.cell-auto-2',
	'Gear',
	[
		['yes', 'success'],
		['attempt', 'primary'],
		['no', 'danger']
	],
	'gear_auto'
);

scout.multipleChoice(
	'.cell-auto-3',
	'Shoot',
	[
		['yes', 'success'],
		['attempt', 'primary'],
		['no', 'danger']
	],
	'shoot_auto'
);

scout.multipleChoice(
	'.cell-tele-2',
	'High Goal Shooting',
	[
		['yes', 'success'],
		['attempt', 'primary'],
		['no', 'danger']
	],
	'high_shoot'
);

scout.multipleChoice(
	'.cell-tele-2',
	'Low Goal Shooting',
	[
		['yes', 'success'],
		['attempt', 'primary'],
		['no', 'danger']
	],
	'low_shoot'
);

scout.counter(
	'.cell-tele-1',
	'Gears',
	1,
	'gears'
);

scout.multipleChoice(
	'.cell-post-match-1',
	'Defense',
	[
		['strong', 'success'],
		['decent', 'primary'],
		['poor', 'warning'],
		['none', 'danger']
	],
	'defense'
);

scout.multipleChoice(
	'.cell-post-match-2',
	'Driver Skill',
	[
		['strong', 'success'],
		['decent', 'primary'],
		['poor', 'danger'],
	],
	'driving'
);

scout.multipleChoice(
	'.cell-tele-3',
	'Climb Speed',
	[
		['fast', 'success'],
		['normal', 'primary'],
		['slow', 'warning'],
		['no climb', 'danger']
	],
	'climb_speed'
);

scout.multipleChoice(
	'.cell-tele-3',
	'Climb Success',
	[
		['successful', 'success'],
		['attempted', 'primary'],
		['no climb', 'danger']
	],
	'climb_success'
);

scout.done(
	'.cell-save-1',
	false
);