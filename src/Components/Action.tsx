import React from "react";
import Modal from "react-modal"
import Charity from "../interfaces/Charity";
import Location from "../interfaces/Location";
import timer from "../libraries/Timer";
import "./Action.css";

Modal.setAppElement('#root')

const Action = ({
  currentLocation,
  time,
  currentCharity,
  locations,
  charities,
  foodOptions,
  onLocationChange,
  onCharityChange,
  onFoodConsumption,
  onSleepClick
}: {
  currentLocation: number
  time: number
  currentCharity: number
  locations: Location[]
  charities: Charity[]
  foodOptions: any[]
  onLocationChange: (index: number) => void
  onCharityChange: (index: number) => void
  onFoodConsumption: (index: number) => void
  onSleepClick: () => void
}) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)
  const [modalState, setModalState] = React.useState<number>(0)

  const handleButtonClick = (state: number, index: number) => {
    setModalOpen(false)
    ;[onLocationChange, onCharityChange, onFoodConsumption][state](index)
  }

  return (
    <div className="action">
      <div className="scene" style={{
        backgroundImage: `url(${locations[currentLocation].image})`
      }}>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={{
            content: {
              maxWidth: '75%',
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            }
          }}
        >
          {
            modalState === 0
              ? (
                <div
                  className="modal"
                >
                  {locations.map((location, index) => (
                    <button
                      key={`loc_${location.name.replaceAll(/[^a-z0-9]/gi, '_')}`}
                      className="location"
                      onClick={() => handleButtonClick(0, index)}
                    >
                      <span style={{ backgroundImage: `url(${location.image})` }}></span>
                      <span>{location.name.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )
              : modalState === 1
                ? (
                  <div
                    className="modal"
                  >
                    {charities.map((charity, index) => (
                      <button
                        key={`cha_${charity.name.replaceAll(/[^a-z0-9]/gi, '_')}`}
                        className="charity"
                        onClick={() => handleButtonClick(1, index)}
                      >
                        <span style={{ backgroundImage: `url(${charity.icon})` }}></span>
                        <span>{charity.name.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                )
                : modalState === 2
                  ? (
                    <div>
                      {/* TODO implement food choices */}
                    </div>
                  )
                  : undefined
          }
        </Modal>
        <div className="scene-info">
          <h1>{locations[currentLocation].name.toUpperCase()}</h1>
          <span>{timer(time).toString()}</span>
        </div>
      </div>
      <div className="controls">
        <div>
          <span>Selected: {locations[currentLocation].name}</span>
          <button onClick={() => {setModalState(0); setModalOpen(true)}}>
            Switch Location
          </button>
        </div>
        <div>
          <span>Selected: {charities[currentCharity].name}</span>
          <button onClick={() => {setModalState(1); setModalOpen(true)}}>
            Switch Charity
          </button>
        </div>
        <div>
          <button onClick={() => {setModalState(2); setModalOpen(true)}}>
            Consume Food
          </button>
          <button onClick={() => onSleepClick()}>Sleep</button>
        </div>
      </div>
    </div>
  );
};

export default Action;
