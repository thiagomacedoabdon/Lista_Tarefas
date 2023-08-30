const Main = {

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelectorAll('#inpuTask')
    },

    bindEvents: function() {
        const self = this

        this.$checkButtons.forEach(function(button) {
            button.onclick = self.Events.checkButton_click
            
        })

        this.$inputTask.onkeypress = self.Events.inputTask_Keypress
    },


    Events: {
        checkButton_click: function(e) {
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')

            if (isDone) {
                li.classList.remove('done')
            } 

            else {
                li.classList.add('done')
            }
            
        },

        inputTask_Keypress: function(e){
            const key = e.key
            

            if (key === 'Enter') {
                alert('Ok')
            }
        }
    }
}

Main.init()