import { Step, Icon } from 'semantic-ui-react';

export function TransportingBooks() {

  const iconName = 'truck';
  const iconColor = 'orange';
  const contentTitle = 'Transporting books🔔';
  const contentDescription = 'We will ship the books to you 💸!';

  return (
    <Step link>
      <Icon name={iconName} color={iconColor}/>
      <Step.Content>
        <Step.Title content={contentTitle}/>
        <Step.Description content={contentDescription}/>
      </Step.Content>
    </Step>
  );
}

export function DepositMoneyHere() {

  const iconName = 'credit card';
  const iconColor = 'violet';
  const contentTitle = 'Deposit money here 🎰!';
  const contentDescription = 'We accept different sponsorships!';

  return(
    <Step link>
      <Icon name={iconName} color={iconColor}/>
      <Step.Content>
        <Step.Title content={contentTitle}/>
        <Step.Description content={contentDescription}/>
      </Step.Content>
    </Step>
  );
}

export function EnglishGames(){

  const iconName = 'gamepad';
  const iconColor = 'olive';
  const contentTitle = 'English games📟';
  const contentDescription = 'Many video games in English are loved by many people!';

  return(
    <Step link>
      <Icon name={iconName} color={iconColor}/>
      <Step.Content>
        <Step.Title content={contentTitle}/>
        <Step.Description content={contentDescription}/>
      </Step.Content>
    </Step>
  );
}