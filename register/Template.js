const registerFunctions = {
    participantCount: 1,

    addParticipant: function() {
        this.participantCount ++;
        document.getElementById("participantsContainer").insertAdjacentHTML("beforeend", participantTemplate(this.participantCount));
    },

    submitForm: function(event) {
        event.preventDefault();
        const adultName = document.getElementById("adult_name").value;
        const totalFee = totalFees();
        const message = `Thank you ${adultName} for registering. You have registered ${this.participantCount} participants and owe $${totalFee} in fees.`;
        document.getElementById("registrationForm").style.display = "none";
        document.getElementById("summary").innerHTML = message;
    }
}

function participantTemplate(count) {
    const HTML = `
        <section class="participant">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}"> First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
                <label for="fee"${count}>Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select>
                    <option selected value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
    `;
    return HTML;
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    feeElements = [...feeElements];
    const total = feeElements.reduce((accumulator, currentFeeElement) => {
        const feeValue = parseFloat(currentFeeElement.value);
        return accumulator + feeValue;
    }, 0);
    return total;
}

export default registerFunctions;
