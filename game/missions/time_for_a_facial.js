// Time for a facial =====================================================================================

var time_for_a_facial_match_result = false;
var time_for_a_facial_gold_medal_result = false;

function game_init_time_for_a_facial(){
    console.log("[Time for a facial] starting...");
    show_mission_screen("Time for a facial", "Prepare a batch of nice, thick, salty fake cum. Get your dildo ready.<br /><br />Suck on your dildo when you have a beam on someone.");
}
function on_death_time_for_a_facial(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Deepthroat once and pour some fake cum onto your face.</span>");
    current_game_deaths += 1;
}
function on_rez_time_for_a_facial(){
    current_game_rezzes += 1;
    showConditionalInstruction("Try to lick the fake cum off your face.");
}
function on_kill_time_for_a_facial(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_time_for_a_facial(){
    showConditionalInstruction("Good slut.");
    current_game_ults += 1;
}
function on_mission_end_time_for_a_facial(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", time_for_a_facial_mission_end_q1);
}
function time_for_a_facial_mission_end_q1(match_result){
    time_for_a_facial_match_result = match_result;
    askQuestion("Did you get a gold medal in healing?", time_for_a_facial_mission_end_handler);
}
function time_for_a_facial_mission_end_handler(healing_medal_result){
    cleanupMission(healing_medal_result, time_for_a_facial_match_result);
}
// =======================================================================================================
