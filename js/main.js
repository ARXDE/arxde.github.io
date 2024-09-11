// Copyright © 2024 ARXDE All Rights Reserved.
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

function NAV_ser() {document.getElementById("servicii").classList.toggle("show");}
function NAV_pro() {document.getElementById("proiecte").classList.toggle("show");}
function NAV_pub() {document.getElementById("publicatii").classList.toggle("show");}
function NAV_cont() {document.getElementById("contact_main").classList.toggle("show");}
function NAV_lang() {document.getElementById("languages").classList.toggle("show");}

window.onclick = function(e) {
  if (!e.target.matches('.mnav_btn')) {
    var mnavs = document.getElementsByClassName("mnav_content");
    var i;
    for (i = 0; i < mnavs.length; i++) {
      var show_mnavs = mnavs[i];
      if (show_mnavs.classList.contains('show')) {
        show_mnavs.classList.remove('show');
      }
    }
  }
}
