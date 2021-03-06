
var app = new Vue(
    {
        el: '#root',
        data: {  
            activeContact: 0,
            newMessageValue: '',
            chatFilter: '',
            activeMessage: false,                                                                             
            contacts: [
                {
                    nome: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    nome: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    nome: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    nome: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                }

            ]
        }, 
        methods: {
            activeChat(index) {
                this.activeContact = index;
                this.activeMessage = false;
            },

            addNewMsg() {                 
                if (this.newMessageValue != 0 ) {
                    this.contacts[this.activeContact].messages.push({
                        date: dayjs().format('DD/MM/YYYY  HH:mm:ss') ,
                        text: this.newMessageValue,
                        status: 'sent'
                    });
                    this.newMessageValue = '';
                }; 
                
               setTimeout (() => {
                    this.contacts[this.activeContact].messages.push({
                        date: dayjs().format('DD/MM/YYYY  HH:mm:ss') ,
                        text: 'ok!',
                        status: 'received'
                });
               }, 1000) ;               
            },

            contactFilter() {
                console.log(this.chatFilter)
                this.contacts.forEach((element) => {
                    if ( element.nome.toLowerCase().includes(this.chatFilter.toLowerCase()) ) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                })
            },           
            
            lastAccess(index) {
                let lastContactAccess = this.contacts[index].messages;                
                return lastContactAccess[lastContactAccess.length - 1].date;
            },

            showDropdown(msgIndex) {
                if( this.activeMessage === msgIndex ){
                    this.activeMessage = false;
                } else {
                    this.activeMessage = msgIndex;
                }               
            },

            deleteMsg(msgIndex) {
                this.contacts[this.activeContact].messages.splice(msgIndex, 1);
                this.activeMessage = false;
            },

            lastMessage(contactIndex) {
                let lastContactMsg = this.contacts[contactIndex].messages[this.contacts[contactIndex].messages.length - 1].text;
                let lastContactShortMsg = lastContactMsg.slice(0, 30);

                if(lastContactShortMsg.length >= 30) {
                    lastContactShortMsg+= '...';
                }
                return lastContactShortMsg;
            }
        }
        
    
    })   