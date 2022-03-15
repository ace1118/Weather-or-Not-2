gdjs.scoreCode = {};
gdjs.scoreCode.GDBGObjects1= [];
gdjs.scoreCode.GDBGObjects2= [];
gdjs.scoreCode.GDBGObjects3= [];
gdjs.scoreCode.GDtileObjects1= [];
gdjs.scoreCode.GDtileObjects2= [];
gdjs.scoreCode.GDtileObjects3= [];
gdjs.scoreCode.GDfloorObjects1= [];
gdjs.scoreCode.GDfloorObjects2= [];
gdjs.scoreCode.GDfloorObjects3= [];
gdjs.scoreCode.GDRedHatBoyObjects1= [];
gdjs.scoreCode.GDRedHatBoyObjects2= [];
gdjs.scoreCode.GDRedHatBoyObjects3= [];
gdjs.scoreCode.GDtile_95newObjects1= [];
gdjs.scoreCode.GDtile_95newObjects2= [];
gdjs.scoreCode.GDtile_95newObjects3= [];
gdjs.scoreCode.GDfloor_95newObjects1= [];
gdjs.scoreCode.GDfloor_95newObjects2= [];
gdjs.scoreCode.GDfloor_95newObjects3= [];
gdjs.scoreCode.GDtreeObjects1= [];
gdjs.scoreCode.GDtreeObjects2= [];
gdjs.scoreCode.GDtreeObjects3= [];
gdjs.scoreCode.GDfenceObjects1= [];
gdjs.scoreCode.GDfenceObjects2= [];
gdjs.scoreCode.GDfenceObjects3= [];
gdjs.scoreCode.GDWON_95LogoObjects1= [];
gdjs.scoreCode.GDWON_95LogoObjects2= [];
gdjs.scoreCode.GDWON_95LogoObjects3= [];
gdjs.scoreCode.GDtile_95darkgrayObjects1= [];
gdjs.scoreCode.GDtile_95darkgrayObjects2= [];
gdjs.scoreCode.GDtile_95darkgrayObjects3= [];
gdjs.scoreCode.GDDoorObjects1= [];
gdjs.scoreCode.GDDoorObjects2= [];
gdjs.scoreCode.GDDoorObjects3= [];
gdjs.scoreCode.GDwindowObjects1= [];
gdjs.scoreCode.GDwindowObjects2= [];
gdjs.scoreCode.GDwindowObjects3= [];
gdjs.scoreCode.GDdoor_95activatorObjects1= [];
gdjs.scoreCode.GDdoor_95activatorObjects2= [];
gdjs.scoreCode.GDdoor_95activatorObjects3= [];
gdjs.scoreCode.GDkeyObjects1= [];
gdjs.scoreCode.GDkeyObjects2= [];
gdjs.scoreCode.GDkeyObjects3= [];
gdjs.scoreCode.GDNewObjectObjects1= [];
gdjs.scoreCode.GDNewObjectObjects2= [];
gdjs.scoreCode.GDNewObjectObjects3= [];
gdjs.scoreCode.GDdoor_95deactivatorObjects1= [];
gdjs.scoreCode.GDdoor_95deactivatorObjects2= [];
gdjs.scoreCode.GDdoor_95deactivatorObjects3= [];
gdjs.scoreCode.GDSAES_95BalitaObjects1= [];
gdjs.scoreCode.GDSAES_95BalitaObjects2= [];
gdjs.scoreCode.GDSAES_95BalitaObjects3= [];
gdjs.scoreCode.GDfallout2Objects1= [];
gdjs.scoreCode.GDfallout2Objects2= [];
gdjs.scoreCode.GDfallout2Objects3= [];
gdjs.scoreCode.GDfalloutObjects1= [];
gdjs.scoreCode.GDfalloutObjects2= [];
gdjs.scoreCode.GDfalloutObjects3= [];
gdjs.scoreCode.GDSSObjects1= [];
gdjs.scoreCode.GDSSObjects2= [];
gdjs.scoreCode.GDSSObjects3= [];
gdjs.scoreCode.GDyou_95got_95itObjects1= [];
gdjs.scoreCode.GDyou_95got_95itObjects2= [];
gdjs.scoreCode.GDyou_95got_95itObjects3= [];
gdjs.scoreCode.GDNewObject2Objects1= [];
gdjs.scoreCode.GDNewObject2Objects2= [];
gdjs.scoreCode.GDNewObject2Objects3= [];
gdjs.scoreCode.GDNameObjects1= [];
gdjs.scoreCode.GDNameObjects2= [];
gdjs.scoreCode.GDNameObjects3= [];
gdjs.scoreCode.GDNoteObjects1= [];
gdjs.scoreCode.GDNoteObjects2= [];
gdjs.scoreCode.GDNoteObjects3= [];
gdjs.scoreCode.GDscrollObjects1= [];
gdjs.scoreCode.GDscrollObjects2= [];
gdjs.scoreCode.GDscrollObjects3= [];

gdjs.scoreCode.conditionTrue_0 = {val:false};
gdjs.scoreCode.condition0IsTrue_0 = {val:false};
gdjs.scoreCode.condition1IsTrue_0 = {val:false};
gdjs.scoreCode.condition2IsTrue_0 = {val:false};


gdjs.scoreCode.eventsList0 = function(runtimeScene) {

{


gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.scoreCode.GDRedHatBoyObjects2 */
{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects2.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects2[i].setAnimationName("Slide");
}
}}

}


};gdjs.scoreCode.eventsList1 = function(runtimeScene) {

{


gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.scoreCode.GDRedHatBoyObjects1 */
{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects1[i].setAnimationName("Slide");
}
}}

}


};gdjs.scoreCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.scoreCode.GDRedHatBoyObjects1, gdjs.scoreCode.GDRedHatBoyObjects2);


gdjs.scoreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.scoreCode.GDRedHatBoyObjects2.length;i<l;++i) {
    if ( !(gdjs.scoreCode.GDRedHatBoyObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.scoreCode.condition0IsTrue_0.val = true;
        gdjs.scoreCode.GDRedHatBoyObjects2[k] = gdjs.scoreCode.GDRedHatBoyObjects2[i];
        ++k;
    }
}
gdjs.scoreCode.GDRedHatBoyObjects2.length = k;}if (gdjs.scoreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.scoreCode.GDRedHatBoyObjects2 */
{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects2.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects2[i].setAnimationName("Idle");
}
}}

}


{


gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.scoreCode.GDRedHatBoyObjects1, gdjs.scoreCode.GDRedHatBoyObjects2);

{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects2.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects2.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects2[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects2.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects2[i].flipX(false);
}
}
{ //Subevents
gdjs.scoreCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.scoreCode.GDRedHatBoyObjects1 */
{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects1[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects1[i].flipX(true);
}
}
{ //Subevents
gdjs.scoreCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.scoreCode.eventsList3 = function(runtimeScene) {

{


gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.scoreCode.GDRedHatBoyObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.scoreCode.GDRedHatBoyObjects2.length !== 0 ? gdjs.scoreCode.GDRedHatBoyObjects2[0] : null), true, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.scoreCode.GDRedHatBoyObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.scoreCode.GDRedHatBoyObjects2.length === 0 ) ? 0 :gdjs.scoreCode.GDRedHatBoyObjects2[0].getPointX("")) + 300, 0.10), "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.scoreCode.GDRedHatBoyObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.scoreCode.GDRedHatBoyObjects1.length === 0 ) ? 0 :gdjs.scoreCode.GDRedHatBoyObjects1[0].getPointY("")), 0.10), "", 0);
}}

}


};gdjs.scoreCode.mapOfGDgdjs_46scoreCode_46GDSSObjects2Objects = Hashtable.newFrom({"SS": gdjs.scoreCode.GDSSObjects2});gdjs.scoreCode.mapOfGDgdjs_46scoreCode_46GDSSObjects2Objects = Hashtable.newFrom({"SS": gdjs.scoreCode.GDSSObjects2});gdjs.scoreCode.mapOfGDgdjs_46scoreCode_46GDSSObjects1Objects = Hashtable.newFrom({"SS": gdjs.scoreCode.GDSSObjects1});gdjs.scoreCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SS"), gdjs.scoreCode.GDSSObjects2);

gdjs.scoreCode.condition0IsTrue_0.val = false;
gdjs.scoreCode.condition1IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scoreCode.mapOfGDgdjs_46scoreCode_46GDSSObjects2Objects, runtimeScene, true, false);
}if ( gdjs.scoreCode.condition0IsTrue_0.val ) {
{
gdjs.scoreCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.scoreCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Note"), gdjs.scoreCode.GDNoteObjects2);
/* Reuse gdjs.scoreCode.GDSSObjects2 */
{for(var i = 0, len = gdjs.scoreCode.GDSSObjects2.length ;i < len;++i) {
    gdjs.scoreCode.GDSSObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.scoreCode.GDNoteObjects2.length ;i < len;++i) {
    gdjs.scoreCode.GDNoteObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "ss_timer");
}}

}


{


gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ss_timer") > 2;
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
{gdjs.screenshot.takeScreenshot(runtimeScene, gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "MyScore_WOT_Quiz.png");
}}

}


{


gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ss_timer") > 4;
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.scoreCode.GDscrollObjects2);
{for(var i = 0, len = gdjs.scoreCode.GDscrollObjects2.length ;i < len;++i) {
    gdjs.scoreCode.GDscrollObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SS"), gdjs.scoreCode.GDSSObjects2);

gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scoreCode.mapOfGDgdjs_46scoreCode_46GDSSObjects2Objects, runtimeScene, true, false);
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.scoreCode.GDSSObjects2 */
{for(var i = 0, len = gdjs.scoreCode.GDSSObjects2.length ;i < len;++i) {
    gdjs.scoreCode.GDSSObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SS"), gdjs.scoreCode.GDSSObjects1);

gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scoreCode.mapOfGDgdjs_46scoreCode_46GDSSObjects1Objects, runtimeScene, true, true);
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.scoreCode.GDSSObjects1 */
{for(var i = 0, len = gdjs.scoreCode.GDSSObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDSSObjects1[i].setOpacity(155);
}
}}

}


};gdjs.scoreCode.eventsList5 = function(runtimeScene) {

{


gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.scoreCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.scoreCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.scoreCode.GDscrollObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "win.mp3", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.scoreCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.scoreCode.GDNewObject2Objects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)));
}
}{for(var i = 0, len = gdjs.scoreCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDNameObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)));
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "ss_timer");
}{for(var i = 0, len = gdjs.scoreCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDscrollObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.scoreCode.GDRedHatBoyObjects1);

gdjs.scoreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.scoreCode.GDRedHatBoyObjects1.length;i<l;++i) {
    if ( gdjs.scoreCode.GDRedHatBoyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.scoreCode.condition0IsTrue_0.val = true;
        gdjs.scoreCode.GDRedHatBoyObjects1[k] = gdjs.scoreCode.GDRedHatBoyObjects1[i];
        ++k;
    }
}
gdjs.scoreCode.GDRedHatBoyObjects1.length = k;}if (gdjs.scoreCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.scoreCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.scoreCode.condition0IsTrue_0.val = false;
{
gdjs.scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.scoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.scoreCode.GDRedHatBoyObjects1);
{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.scoreCode.GDRedHatBoyObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDRedHatBoyObjects1[i].setAnimationName("Jump");
}
}}

}


{


gdjs.scoreCode.eventsList3(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("tile_darkgray"), gdjs.scoreCode.GDtile_95darkgrayObjects1);
{for(var i = 0, len = gdjs.scoreCode.GDtile_95darkgrayObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDtile_95darkgrayObjects1[i].setColor("192;192;192");
}
}}

}


{


gdjs.scoreCode.eventsList4(runtimeScene);
}


{


{
}

}


};

gdjs.scoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scoreCode.GDBGObjects1.length = 0;
gdjs.scoreCode.GDBGObjects2.length = 0;
gdjs.scoreCode.GDBGObjects3.length = 0;
gdjs.scoreCode.GDtileObjects1.length = 0;
gdjs.scoreCode.GDtileObjects2.length = 0;
gdjs.scoreCode.GDtileObjects3.length = 0;
gdjs.scoreCode.GDfloorObjects1.length = 0;
gdjs.scoreCode.GDfloorObjects2.length = 0;
gdjs.scoreCode.GDfloorObjects3.length = 0;
gdjs.scoreCode.GDRedHatBoyObjects1.length = 0;
gdjs.scoreCode.GDRedHatBoyObjects2.length = 0;
gdjs.scoreCode.GDRedHatBoyObjects3.length = 0;
gdjs.scoreCode.GDtile_95newObjects1.length = 0;
gdjs.scoreCode.GDtile_95newObjects2.length = 0;
gdjs.scoreCode.GDtile_95newObjects3.length = 0;
gdjs.scoreCode.GDfloor_95newObjects1.length = 0;
gdjs.scoreCode.GDfloor_95newObjects2.length = 0;
gdjs.scoreCode.GDfloor_95newObjects3.length = 0;
gdjs.scoreCode.GDtreeObjects1.length = 0;
gdjs.scoreCode.GDtreeObjects2.length = 0;
gdjs.scoreCode.GDtreeObjects3.length = 0;
gdjs.scoreCode.GDfenceObjects1.length = 0;
gdjs.scoreCode.GDfenceObjects2.length = 0;
gdjs.scoreCode.GDfenceObjects3.length = 0;
gdjs.scoreCode.GDWON_95LogoObjects1.length = 0;
gdjs.scoreCode.GDWON_95LogoObjects2.length = 0;
gdjs.scoreCode.GDWON_95LogoObjects3.length = 0;
gdjs.scoreCode.GDtile_95darkgrayObjects1.length = 0;
gdjs.scoreCode.GDtile_95darkgrayObjects2.length = 0;
gdjs.scoreCode.GDtile_95darkgrayObjects3.length = 0;
gdjs.scoreCode.GDDoorObjects1.length = 0;
gdjs.scoreCode.GDDoorObjects2.length = 0;
gdjs.scoreCode.GDDoorObjects3.length = 0;
gdjs.scoreCode.GDwindowObjects1.length = 0;
gdjs.scoreCode.GDwindowObjects2.length = 0;
gdjs.scoreCode.GDwindowObjects3.length = 0;
gdjs.scoreCode.GDdoor_95activatorObjects1.length = 0;
gdjs.scoreCode.GDdoor_95activatorObjects2.length = 0;
gdjs.scoreCode.GDdoor_95activatorObjects3.length = 0;
gdjs.scoreCode.GDkeyObjects1.length = 0;
gdjs.scoreCode.GDkeyObjects2.length = 0;
gdjs.scoreCode.GDkeyObjects3.length = 0;
gdjs.scoreCode.GDNewObjectObjects1.length = 0;
gdjs.scoreCode.GDNewObjectObjects2.length = 0;
gdjs.scoreCode.GDNewObjectObjects3.length = 0;
gdjs.scoreCode.GDdoor_95deactivatorObjects1.length = 0;
gdjs.scoreCode.GDdoor_95deactivatorObjects2.length = 0;
gdjs.scoreCode.GDdoor_95deactivatorObjects3.length = 0;
gdjs.scoreCode.GDSAES_95BalitaObjects1.length = 0;
gdjs.scoreCode.GDSAES_95BalitaObjects2.length = 0;
gdjs.scoreCode.GDSAES_95BalitaObjects3.length = 0;
gdjs.scoreCode.GDfallout2Objects1.length = 0;
gdjs.scoreCode.GDfallout2Objects2.length = 0;
gdjs.scoreCode.GDfallout2Objects3.length = 0;
gdjs.scoreCode.GDfalloutObjects1.length = 0;
gdjs.scoreCode.GDfalloutObjects2.length = 0;
gdjs.scoreCode.GDfalloutObjects3.length = 0;
gdjs.scoreCode.GDSSObjects1.length = 0;
gdjs.scoreCode.GDSSObjects2.length = 0;
gdjs.scoreCode.GDSSObjects3.length = 0;
gdjs.scoreCode.GDyou_95got_95itObjects1.length = 0;
gdjs.scoreCode.GDyou_95got_95itObjects2.length = 0;
gdjs.scoreCode.GDyou_95got_95itObjects3.length = 0;
gdjs.scoreCode.GDNewObject2Objects1.length = 0;
gdjs.scoreCode.GDNewObject2Objects2.length = 0;
gdjs.scoreCode.GDNewObject2Objects3.length = 0;
gdjs.scoreCode.GDNameObjects1.length = 0;
gdjs.scoreCode.GDNameObjects2.length = 0;
gdjs.scoreCode.GDNameObjects3.length = 0;
gdjs.scoreCode.GDNoteObjects1.length = 0;
gdjs.scoreCode.GDNoteObjects2.length = 0;
gdjs.scoreCode.GDNoteObjects3.length = 0;
gdjs.scoreCode.GDscrollObjects1.length = 0;
gdjs.scoreCode.GDscrollObjects2.length = 0;
gdjs.scoreCode.GDscrollObjects3.length = 0;

gdjs.scoreCode.eventsList5(runtimeScene);
return;

}

gdjs['scoreCode'] = gdjs.scoreCode;
