gdjs.DiscussionCode = {};
gdjs.DiscussionCode.GDSAES_95balitaObjects1= [];
gdjs.DiscussionCode.GDSAES_95balitaObjects2= [];
gdjs.DiscussionCode.GDSAES_95balitaObjects3= [];
gdjs.DiscussionCode.GDplay_95pauseObjects1= [];
gdjs.DiscussionCode.GDplay_95pauseObjects2= [];
gdjs.DiscussionCode.GDplay_95pauseObjects3= [];
gdjs.DiscussionCode.GDforwardObjects1= [];
gdjs.DiscussionCode.GDforwardObjects2= [];
gdjs.DiscussionCode.GDforwardObjects3= [];
gdjs.DiscussionCode.GDbackwardObjects1= [];
gdjs.DiscussionCode.GDbackwardObjects2= [];
gdjs.DiscussionCode.GDbackwardObjects3= [];

gdjs.DiscussionCode.conditionTrue_0 = {val:false};
gdjs.DiscussionCode.condition0IsTrue_0 = {val:false};
gdjs.DiscussionCode.condition1IsTrue_0 = {val:false};
gdjs.DiscussionCode.condition2IsTrue_0 = {val:false};
gdjs.DiscussionCode.conditionTrue_1 = {val:false};
gdjs.DiscussionCode.condition0IsTrue_1 = {val:false};
gdjs.DiscussionCode.condition1IsTrue_1 = {val:false};
gdjs.DiscussionCode.condition2IsTrue_1 = {val:false};


gdjs.DiscussionCode.eventsList0 = function(runtimeScene) {

{


{
}

}


};gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.DiscussionCode.GDplay_95pauseObjects1});gdjs.DiscussionCode.eventsList1 = function(runtimeScene) {

{


gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
{gdjs.DiscussionCode.conditionTrue_1 = gdjs.DiscussionCode.condition0IsTrue_0;
gdjs.DiscussionCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(58831300);
}
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


};gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.DiscussionCode.GDplay_95pauseObjects1});gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.DiscussionCode.GDplay_95pauseObjects1});gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDforwardObjects2Objects = Hashtable.newFrom({"forward": gdjs.DiscussionCode.GDforwardObjects2});gdjs.DiscussionCode.eventsList2 = function(runtimeScene) {

{


gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.DiscussionCode.GDSAES_95balitaObjects2);
{for(var i = 0, len = gdjs.DiscussionCode.GDSAES_95balitaObjects2.length ;i < len;++i) {
    gdjs.DiscussionCode.GDSAES_95balitaObjects2[i].setCurrentTime((gdjs.DiscussionCode.GDSAES_95balitaObjects2[i].getCurrentTime()) + 10);
}
}}

}


};gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDforwardObjects2Objects = Hashtable.newFrom({"forward": gdjs.DiscussionCode.GDforwardObjects2});gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDbackwardObjects2Objects = Hashtable.newFrom({"backward": gdjs.DiscussionCode.GDbackwardObjects2});gdjs.DiscussionCode.eventsList3 = function(runtimeScene) {

{


gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.DiscussionCode.GDSAES_95balitaObjects2);
{for(var i = 0, len = gdjs.DiscussionCode.GDSAES_95balitaObjects2.length ;i < len;++i) {
    gdjs.DiscussionCode.GDSAES_95balitaObjects2[i].setCurrentTime((gdjs.DiscussionCode.GDSAES_95balitaObjects2[i].getCurrentTime()) - 10);
}
}}

}


};gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDbackwardObjects1Objects = Hashtable.newFrom({"backward": gdjs.DiscussionCode.GDbackwardObjects1});gdjs.DiscussionCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("forward"), gdjs.DiscussionCode.GDforwardObjects2);

gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDforwardObjects2Objects, runtimeScene, true, false);
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DiscussionCode.GDforwardObjects2 */
{for(var i = 0, len = gdjs.DiscussionCode.GDforwardObjects2.length ;i < len;++i) {
    gdjs.DiscussionCode.GDforwardObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.DiscussionCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forward"), gdjs.DiscussionCode.GDforwardObjects2);

gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDforwardObjects2Objects, runtimeScene, true, true);
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DiscussionCode.GDforwardObjects2 */
{for(var i = 0, len = gdjs.DiscussionCode.GDforwardObjects2.length ;i < len;++i) {
    gdjs.DiscussionCode.GDforwardObjects2[i].setOpacity(50);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backward"), gdjs.DiscussionCode.GDbackwardObjects2);

gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDbackwardObjects2Objects, runtimeScene, true, false);
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DiscussionCode.GDbackwardObjects2 */
{for(var i = 0, len = gdjs.DiscussionCode.GDbackwardObjects2.length ;i < len;++i) {
    gdjs.DiscussionCode.GDbackwardObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.DiscussionCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backward"), gdjs.DiscussionCode.GDbackwardObjects1);

gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDbackwardObjects1Objects, runtimeScene, true, true);
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DiscussionCode.GDbackwardObjects1 */
{for(var i = 0, len = gdjs.DiscussionCode.GDbackwardObjects1.length ;i < len;++i) {
    gdjs.DiscussionCode.GDbackwardObjects1[i].setOpacity(50);
}
}}

}


};gdjs.DiscussionCode.eventsList5 = function(runtimeScene) {

{


gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.DiscussionCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.DiscussionCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.DiscussionCode.GDSAES_95balitaObjects1[i].play();
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.DiscussionCode.GDSAES_95balitaObjects1);

gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DiscussionCode.GDSAES_95balitaObjects1.length;i<l;++i) {
    if ( gdjs.DiscussionCode.GDSAES_95balitaObjects1[i].isEnded() ) {
        gdjs.DiscussionCode.condition0IsTrue_0.val = true;
        gdjs.DiscussionCode.GDSAES_95balitaObjects1[k] = gdjs.DiscussionCode.GDSAES_95balitaObjects1[i];
        ++k;
    }
}
gdjs.DiscussionCode.GDSAES_95balitaObjects1.length = k;}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(3);
}
{ //Subevents
gdjs.DiscussionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.DiscussionCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.DiscussionCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.DiscussionCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{


gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.DiscussionCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.DiscussionCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.DiscussionCode.GDSAES_95balitaObjects1[i].pause();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.DiscussionCode.GDplay_95pauseObjects1);

gdjs.DiscussionCode.condition0IsTrue_0.val = false;
gdjs.DiscussionCode.condition1IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DiscussionCode.condition0IsTrue_0.val ) {
{
gdjs.DiscussionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.DiscussionCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.DiscussionCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


{


gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.DiscussionCode.GDplay_95pauseObjects1);
{for(var i = 0, len = gdjs.DiscussionCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.DiscussionCode.GDplay_95pauseObjects1[i].setAnimationName("play");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.DiscussionCode.GDplay_95pauseObjects1);

gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DiscussionCode.GDplay_95pauseObjects1.length;i<l;++i) {
    if ( gdjs.DiscussionCode.GDplay_95pauseObjects1[i].isCurrentAnimationName("play") ) {
        gdjs.DiscussionCode.condition0IsTrue_0.val = true;
        gdjs.DiscussionCode.GDplay_95pauseObjects1[k] = gdjs.DiscussionCode.GDplay_95pauseObjects1[i];
        ++k;
    }
}
gdjs.DiscussionCode.GDplay_95pauseObjects1.length = k;}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.DiscussionCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.DiscussionCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.DiscussionCode.GDSAES_95balitaObjects1[i].pause();
}
}}

}


{


gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.DiscussionCode.GDplay_95pauseObjects1);
{for(var i = 0, len = gdjs.DiscussionCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.DiscussionCode.GDplay_95pauseObjects1[i].setAnimationName("pause");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.DiscussionCode.GDplay_95pauseObjects1);

gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DiscussionCode.GDplay_95pauseObjects1.length;i<l;++i) {
    if ( gdjs.DiscussionCode.GDplay_95pauseObjects1[i].isCurrentAnimationName("pause") ) {
        gdjs.DiscussionCode.condition0IsTrue_0.val = true;
        gdjs.DiscussionCode.GDplay_95pauseObjects1[k] = gdjs.DiscussionCode.GDplay_95pauseObjects1[i];
        ++k;
    }
}
gdjs.DiscussionCode.GDplay_95pauseObjects1.length = k;}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.DiscussionCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.DiscussionCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.DiscussionCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.DiscussionCode.GDplay_95pauseObjects1);

gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, false);
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DiscussionCode.GDplay_95pauseObjects1 */
{for(var i = 0, len = gdjs.DiscussionCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.DiscussionCode.GDplay_95pauseObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.DiscussionCode.GDplay_95pauseObjects1);

gdjs.DiscussionCode.condition0IsTrue_0.val = false;
{
gdjs.DiscussionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DiscussionCode.mapOfGDgdjs_46DiscussionCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, true);
}if (gdjs.DiscussionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DiscussionCode.GDplay_95pauseObjects1 */
{for(var i = 0, len = gdjs.DiscussionCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.DiscussionCode.GDplay_95pauseObjects1[i].setOpacity(100);
}
}}

}


{


gdjs.DiscussionCode.eventsList4(runtimeScene);
}


{


{
}

}


};

gdjs.DiscussionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DiscussionCode.GDSAES_95balitaObjects1.length = 0;
gdjs.DiscussionCode.GDSAES_95balitaObjects2.length = 0;
gdjs.DiscussionCode.GDSAES_95balitaObjects3.length = 0;
gdjs.DiscussionCode.GDplay_95pauseObjects1.length = 0;
gdjs.DiscussionCode.GDplay_95pauseObjects2.length = 0;
gdjs.DiscussionCode.GDplay_95pauseObjects3.length = 0;
gdjs.DiscussionCode.GDforwardObjects1.length = 0;
gdjs.DiscussionCode.GDforwardObjects2.length = 0;
gdjs.DiscussionCode.GDforwardObjects3.length = 0;
gdjs.DiscussionCode.GDbackwardObjects1.length = 0;
gdjs.DiscussionCode.GDbackwardObjects2.length = 0;
gdjs.DiscussionCode.GDbackwardObjects3.length = 0;

gdjs.DiscussionCode.eventsList5(runtimeScene);
return;

}

gdjs['DiscussionCode'] = gdjs.DiscussionCode;
