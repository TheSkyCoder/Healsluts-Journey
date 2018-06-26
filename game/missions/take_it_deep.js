// Take it deep ==========================================================================================

var take_it_deep_match_result = false;

function game_init_take_it_deep(){
    console.log("[Take it deep] starting...");
    show_mission_screen("Take it deep", "Stand over a nice, thick dildo. Every time you die, sit down on it, balls deep. You may not get up until you've resurrected someone.");
}
function on_death_take_it_deep(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Sit down on the dildo. If you die with the dildo still inside of you, start bouncing on it.</span>");
    current_game_deaths += 1;
}
function on_rez_take_it_deep(){
    current_game_rezzes += 1;
    showConditionalInstruction("Noted.");
}
function on_kill_take_it_deep(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_take_it_deep(){
    showConditionalInstruction("Noted.");
    current_game_ults += 1;
}
function on_mission_end_take_it_deep(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", take_it_deep_mission_end_q1);
}
function take_it_deep_mission_end_q1(match_result){
    take_it_deep_match_result = match_result;
    askQuestion("Do you still have the dildo inside of you?", take_it_deep_mission_end_handler);
}
function take_it_deep_mission_end_handler(dildo_result){
    if(dildo_result === true){
        conditionResult = false;
    }else{
        conditionResult = true;
    }
    cleanupMission(conditionResult, take_it_deep_match_result);
}
// =======================================================================================================
