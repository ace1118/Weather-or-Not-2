gdjs.mission_321Code = {};
gdjs.mission_321Code.GDRedHatBoyObjects1= [];
gdjs.mission_321Code.GDRedHatBoyObjects2= [];
gdjs.mission_321Code.GDBGObjects1= [];
gdjs.mission_321Code.GDBGObjects2= [];
gdjs.mission_321Code.GDtileObjects1= [];
gdjs.mission_321Code.GDtileObjects2= [];
gdjs.mission_321Code.GDfloorObjects1= [];
gdjs.mission_321Code.GDfloorObjects2= [];
gdjs.mission_321Code.GDtile_95newObjects1= [];
gdjs.mission_321Code.GDtile_95newObjects2= [];
gdjs.mission_321Code.GDfloor_95newObjects1= [];
gdjs.mission_321Code.GDfloor_95newObjects2= [];
gdjs.mission_321Code.GDtreeObjects1= [];
gdjs.mission_321Code.GDtreeObjects2= [];
gdjs.mission_321Code.GDfenceObjects1= [];
gdjs.mission_321Code.GDfenceObjects2= [];
gdjs.mission_321Code.GDtile_95darkgrayObjects1= [];
gdjs.mission_321Code.GDtile_95darkgrayObjects2= [];
gdjs.mission_321Code.GDm1_95logoObjects1= [];
gdjs.mission_321Code.GDm1_95logoObjects2= [];
gdjs.mission_321Code.GDsun_95iconObjects1= [];
gdjs.mission_321Code.GDsun_95iconObjects2= [];
gdjs.mission_321Code.GDtry_95againObjects1= [];
gdjs.mission_321Code.GDtry_95againObjects2= [];
gdjs.mission_321Code.GDyou_95got_95itObjects1= [];
gdjs.mission_321Code.GDyou_95got_95itObjects2= [];
gdjs.mission_321Code.GDblankObjects1= [];
gdjs.mission_321Code.GDblankObjects2= [];
gdjs.mission_321Code.GDblackObjects1= [];
gdjs.mission_321Code.GDblackObjects2= [];
gdjs.mission_321Code.GDtimerObjects1= [];
gdjs.mission_321Code.GDtimerObjects2= [];
gdjs.mission_321Code.GDiguhitObjects1= [];
gdjs.mission_321Code.GDiguhitObjects2= [];

gdjs.mission_321Code.conditionTrue_0 = {val:false};
gdjs.mission_321Code.condition0IsTrue_0 = {val:false};
gdjs.mission_321Code.condition1IsTrue_0 = {val:false};
gdjs.mission_321Code.conditionTrue_1 = {val:false};
gdjs.mission_321Code.condition0IsTrue_1 = {val:false};
gdjs.mission_321Code.condition1IsTrue_1 = {val:false};


gdjs.mission_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.mission_321Code.condition0IsTrue_0.val = false;
{
{gdjs.mission_321Code.conditionTrue_1 = gdjs.mission_321Code.condition0IsTrue_0;
gdjs.mission_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(57665844);
}
}if (gdjs.mission_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "mission_notif.mp3", false, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "m1.mp3", false, 100, 1);
}}

}


};gdjs.mission_321Code.eventsList1 = function(runtimeScene) {

{


gdjs.mission_321Code.condition0IsTrue_0.val = false;
{
{gdjs.mission_321Code.conditionTrue_1 = gdjs.mission_321Code.condition0IsTrue_0;
gdjs.mission_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(57667252);
}
}if (gdjs.mission_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_music.mp3", true, 30, 1);
}}

}


};gdjs.mission_321Code.eventsList2 = function(runtimeScene) {

{


gdjs.mission_321Code.condition0IsTrue_0.val = false;
{
gdjs.mission_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.mission_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.mission_321Code.GDblackObjects1);
{for(var i = 0, len = gdjs.mission_321Code.GDblackObjects1.length ;i < len;++i) {
    gdjs.mission_321Code.GDblackObjects1[i].setOpacity(127.5);
}
}}

}


{


gdjs.mission_321Code.condition0IsTrue_0.val = false;
{
gdjs.mission_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.mission_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.mission_321Code.GDtimerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(5);
}{for(var i = 0, len = gdjs.mission_321Code.GDtimerObjects1.length ;i < len;++i) {
    gdjs.mission_321Code.GDtimerObjects1[i].resetTimer("timer");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bg_music");
}
{ //Subevents
gdjs.mission_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.mission_321Code.condition0IsTrue_0.val = false;
{
gdjs.mission_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "bg_music") > 21;
}if (gdjs.mission_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.mission_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.mission_321Code.GDtimerObjects1);

gdjs.mission_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mission_321Code.GDtimerObjects1.length;i<l;++i) {
    if ( gdjs.mission_321Code.GDtimerObjects1[i].getTimerElapsedTimeInSecondsOrNaN("timer") > 21 ) {
        gdjs.mission_321Code.condition0IsTrue_0.val = true;
        gdjs.mission_321Code.GDtimerObjects1[k] = gdjs.mission_321Code.GDtimerObjects1[i];
        ++k;
    }
}
gdjs.mission_321Code.GDtimerObjects1.length = k;}if (gdjs.mission_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.mission_321Code.GDtimerObjects1 */
{for(var i = 0, len = gdjs.mission_321Code.GDtimerObjects1.length ;i < len;++i) {
    gdjs.mission_321Code.GDtimerObjects1[i].play();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.mission_321Code.GDtimerObjects1.length ;i < len;++i) {
    gdjs.mission_321Code.GDtimerObjects1[i].resetTimer("timer");
}
}{for(var i = 0, len = gdjs.mission_321Code.GDtimerObjects1.length ;i < len;++i) {
    gdjs.mission_321Code.GDtimerObjects1[i].pauseTimer("timer");
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.mission_321Code.GDtimerObjects1);

gdjs.mission_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mission_321Code.GDtimerObjects1.length;i<l;++i) {
    if ( gdjs.mission_321Code.GDtimerObjects1[i].isEnded() ) {
        gdjs.mission_321Code.condition0IsTrue_0.val = true;
        gdjs.mission_321Code.GDtimerObjects1[k] = gdjs.mission_321Code.GDtimerObjects1[i];
        ++k;
    }
}
gdjs.mission_321Code.GDtimerObjects1.length = k;}if (gdjs.mission_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "you got it", false);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.mission_321Code.GDRedHatBoyObjects1);

gdjs.mission_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mission_321Code.GDRedHatBoyObjects1.length;i<l;++i) {
    if ( gdjs.mission_321Code.GDRedHatBoyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.mission_321Code.condition0IsTrue_0.val = true;
        gdjs.mission_321Code.GDRedHatBoyObjects1[k] = gdjs.mission_321Code.GDRedHatBoyObjects1[i];
        ++k;
    }
}
gdjs.mission_321Code.GDRedHatBoyObjects1.length = k;}if (gdjs.mission_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.mission_321Code.GDRedHatBoyObjects1 */
{for(var i = 0, len = gdjs.mission_321Code.GDRedHatBoyObjects1.length ;i < len;++i) {
    gdjs.mission_321Code.GDRedHatBoyObjects1[i].setAnimationName("Run");
}
}}

}


{


{
}

}


};

gdjs.mission_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mission_321Code.GDRedHatBoyObjects1.length = 0;
gdjs.mission_321Code.GDRedHatBoyObjects2.length = 0;
gdjs.mission_321Code.GDBGObjects1.length = 0;
gdjs.mission_321Code.GDBGObjects2.length = 0;
gdjs.mission_321Code.GDtileObjects1.length = 0;
gdjs.mission_321Code.GDtileObjects2.length = 0;
gdjs.mission_321Code.GDfloorObjects1.length = 0;
gdjs.mission_321Code.GDfloorObjects2.length = 0;
gdjs.mission_321Code.GDtile_95newObjects1.length = 0;
gdjs.mission_321Code.GDtile_95newObjects2.length = 0;
gdjs.mission_321Code.GDfloor_95newObjects1.length = 0;
gdjs.mission_321Code.GDfloor_95newObjects2.length = 0;
gdjs.mission_321Code.GDtreeObjects1.length = 0;
gdjs.mission_321Code.GDtreeObjects2.length = 0;
gdjs.mission_321Code.GDfenceObjects1.length = 0;
gdjs.mission_321Code.GDfenceObjects2.length = 0;
gdjs.mission_321Code.GDtile_95darkgrayObjects1.length = 0;
gdjs.mission_321Code.GDtile_95darkgrayObjects2.length = 0;
gdjs.mission_321Code.GDm1_95logoObjects1.length = 0;
gdjs.mission_321Code.GDm1_95logoObjects2.length = 0;
gdjs.mission_321Code.GDsun_95iconObjects1.length = 0;
gdjs.mission_321Code.GDsun_95iconObjects2.length = 0;
gdjs.mission_321Code.GDtry_95againObjects1.length = 0;
gdjs.mission_321Code.GDtry_95againObjects2.length = 0;
gdjs.mission_321Code.GDyou_95got_95itObjects1.length = 0;
gdjs.mission_321Code.GDyou_95got_95itObjects2.length = 0;
gdjs.mission_321Code.GDblankObjects1.length = 0;
gdjs.mission_321Code.GDblankObjects2.length = 0;
gdjs.mission_321Code.GDblackObjects1.length = 0;
gdjs.mission_321Code.GDblackObjects2.length = 0;
gdjs.mission_321Code.GDtimerObjects1.length = 0;
gdjs.mission_321Code.GDtimerObjects2.length = 0;
gdjs.mission_321Code.GDiguhitObjects1.length = 0;
gdjs.mission_321Code.GDiguhitObjects2.length = 0;

gdjs.mission_321Code.eventsList2(runtimeScene);
return;

}

gdjs['mission_321Code'] = gdjs.mission_321Code;
