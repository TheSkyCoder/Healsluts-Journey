// Ride it ===============================================================================================
var ride_it_match_result = false;
var ride_it_q1_result = false;

function game_init_ride_it(){
    console.log("[Ride it] starting...");
    show_mission_screen("Ride it", "Spend the entire game sitting on your dildo!");
    current_game_counter_x = 2;
}
function on_death_ride_it(){
    var times_to_bounce = parseInt(current_game_counter_x) * 2;
    current_game_counter_x = times_to_bounce;
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Bounce on your dildo " + times_to_bounce + " times. You are not allowed to leave spawn until you've completed all the bounces.</span>");
}
function on_rez_ride_it(){
    showConditionalInstruction("Nice job!");
}
function on_kill_ride_it(){
    showConditionalInstruction("Nice kill!");
}
function on_ult_ride_it(){
    showConditionalInstruction("Good slut!");
}
function on_mission_end_ride_it(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", ride_it_mission_end_s1);
}
function ride_it_mission_end_s1(match_result){
    ride_it_match_result = match_result;
    askQuestion("Did you get a gold medal in objective time?", ride_it_mission_end_s2);
}
function ride_it_mission_end_s2(gold_medal_objtime_result){
    ride_it_q1_result = gold_medal_objtime_result;
    askQuestion("Did you get a medal in every category?", ride_it_mission_end_handler);
}
function ride_it_mission_end_handler(ride_it_q2_result){
    // Check conditions:
    if(ride_it_q1_result === true || ride_it_q2_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, ride_it_match_result);
}
// =======================================================================================================
