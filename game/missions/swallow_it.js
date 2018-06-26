// Swallow it ============================================================================================

var swallow_it_match_result = false;
var swallow_it_gold_medal_result = false;

function game_init_swallow_it(){
    console.log("[Swallow it] starting...");
    show_mission_screen("Swallow it", "Get a dildo and some fake cum (or milk) in glass ready. Keep sucking on the dildo unless you've got a healing beam on someone.");
}
function on_death_swallow_it(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Drink some cum.</span>");
    current_game_deaths += 1;
}
function on_rez_swallow_it(){
    current_game_rezzes += 1;
    showConditionalInstruction("Deepthroat the dildo.");
}
function on_kill_swallow_it(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_swallow_it(){
    showConditionalInstruction("Good slut. Now deepthroat the dildo.");
    current_game_ults += 1;
}
function on_mission_end_swallow_it(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", swallow_it_mission_end_q1);
}
function swallow_it_mission_end_q1(match_result){
    swallow_it_match_result = match_result;
    askQuestion("Did you get at least 3 gold medals?", swallow_it_mission_end_q2);
}
function swallow_it_mission_end_q2(gold_medal_result){
    swallow_it_gold_medal_result = gold_medal_result;
    askQuestion("Are there still cum left in your glass?", swallow_it_mission_end_handler);
}
function swallow_it_mission_end_handler(cum_left_result){
    // Check conditions:
    if(swallow_it_gold_medal_result === true || cum_left_result === false){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, swallow_it_match_result);
}
// =======================================================================================================
