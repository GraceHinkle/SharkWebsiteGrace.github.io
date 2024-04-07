(() => {
    const Filters = (props) => {
        const updateFilter = (filter, value) => {
            props.updateFormState({
                [filter]: value,
            });
        };

    return (
        <React.Fragment>
            <p><b>Filter your data here:</b></p>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'>
                        <b>Sub-Species</b>
                        <select
                                onChange={(e) => updateFilter('subSpecies', e.target.value)}
                            >
                                <option value=''>None</option>
                                <option value='Angelshark'>Angelshark</option>
                                <option value='Lanternshark'>Lanternshark</option>
                                <option value='Pygmyshark'>Pygmyshark</option>
                                <option value='Gulpershark'>Gulpershark</option>
                                <option value='Catshark'>Catshark</option>
                                <option value='Hammerhead'>Hammerhead</option>
                                <option value='Spurdog'>Spurdog</option>
                                <option value='Dogfish'>Dogfish</option>
                            </select>
                    </div>
                    <div className='col-md-3'>
                        <b>Endangerment</b>
                        <select
                                onChange={(e) => updateFilter('endangerment', e.target.value)}
                            >
                                <option value=''>None</option>
                                <option value='Critically Endangered'>Critically Endangered</option>
                                <option value='Endangered'>Endangered</option>
                                <option value='Vulnerable'>Vulnerable</option>
                                <option value='Near Threatened'>Near Threatened</option>
                                <option value='Least Concern'>Least Concern</option>
                                <option value='Data Deficient'>Data Deficient</option>
                            </select>
                    </div>
                    <div className='col-md-3'>
                        <b>Growth Rates</b>
                        <select
                                onChange={(e) => updateFilter('growthRates', e.target.value)}
                            >
                                <option value=''>None</option>
                                <option value='Undefined'>Undefined</option>
                                <option value='Decreasing'>Decreasing</option>
                                <option value='Stable'>Stable</option>
                                <option value='Increasing'>Increasing</option>
                            </select>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'>
                        <b>North Atlantic</b>
                        <select
                            onChange={(e) => updateFilter('northAtlantic', e.target.value)}
                        >
                            <option value=''>All</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </div>
                    <div className='col-md-3'>
                        <b>South Atlantic</b>
                        <select
                            onChange={(e) => updateFilter('southAtlantic', e.target.value)}
                        >
                            <option value=''>All</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </div>
                    <div className='col-md-3'>
                        <b>Arctic</b>
                        <select
                            onChange={(e) => updateFilter('arctic', e.target.value)}
                        >
                            <option value=''>All</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'>
                        <b>Indian</b>
                        <select
                            onChange={(e) => updateFilter('indian', e.target.value)}
                        >
                            <option value=''>All</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </div>
                    <div className='col-md-3'>
                        <b>North Pacific</b>
                        <select
                            onChange={(e) => updateFilter('northPacific', e.target.value)}
                        >
                            <option value=''>All</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </div>
                    <div className='col-md-3'>
                        <b>South Pacific</b>
                        <select
                            onChange={(e) => updateFilter('southPacific', e.target.value)}
                        >
                            <option value=''>All</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    );
}

    const DataTable = (props) => {
        return (
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Shark</th>
                            <th>Sub-Species</th>
                            <th>Endangerment</th>
                            <th>Growth Rates</th>
                            <th>North Atlantic</th>
                            <th>South Atlantic</th>
                            <th>Arctic</th>
                            <th>Indian</th>
                            <th>North Pacific</th>
                            <th>South Pacific</th>
                        </tr>
                        {props.dataToDisplay.map((row, i) => {
                            return (
                                <tr key={i}>
                                    
                                    <td>{row.Shark}</td>
                                    <td>{row['Sub-Species']}</td>
                                    <td>{row.Endangerment}</td>
                                    <td>{row['Growth Rates']}</td>
                                    <td>{row['North Atlantic']}</td>
                                    <td>{row['South Atlantic']}</td>
                                    <td>{row.Arctic}</td>
                                    <td>{row.Indian}</td>
                                    <td>{row['North Pacific']}</td>
                                    <td>{row['South Pacific']}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);

            this.originalData = props.originalData;

            this.state = {
                subSpecies: '',
                endangerment: '',
                growthRates: '',
                northAtlantic: '',
                southAtlantic: '',
                arctic: '',
                indian: '',
                northPacific: '',
                southPacific: '',
            };

            this.updateFormState = this.updateFormState.bind(this);
        }

        updateFormState(specification) {
            this.setState(specification);
        }


        render() {
            let filteredData = this.originalData;
    
            if (this.state.subSpecies !== '') {
                filteredData = filteredData.filter((row) => {
                    return row['Sub-Species'] === this.state.subSpecies;
                });
            }
    
            if (this.state.endangerment !== '') {
                filteredData = filteredData.filter((row) => {
                    return row.Endangerment === this.state.endangerment;
                });
            }
    
            if (this.state.growthRates !== '') {
                filteredData = filteredData.filter((row) => {
                    return row['Growth Rates'] === this.state.growthRates;
                });
            }
    
            // Convert 'Yes' and 'No' to boolean for filtering
            const convertToBoolean = (value) => {
                return value === 'Yes';
            };
    
            if (this.state.northAtlantic !== '') {
                filteredData = filteredData.filter((row) => {
                    return convertToBoolean(row['North Atlantic']) === convertToBoolean(this.state.northAtlantic);
                });
            }
    
            if (this.state.southAtlantic !== '') {
                filteredData = filteredData.filter((row) => {
                    return convertToBoolean(row['South Atlantic']) === convertToBoolean(this.state.southAtlantic);
                });
            }
    
            if (this.state.arctic !== '') {
                filteredData = filteredData.filter((row) => {
                    return convertToBoolean(row.Arctic) === convertToBoolean(this.state.arctic);
                });
            }
    
            if (this.state.indian !== '') {
                filteredData = filteredData.filter((row) => {
                    return convertToBoolean(row.Indian) === convertToBoolean(this.state.indian);
                });
            }
    
            if (this.state.northPacific !== '') {
                filteredData = filteredData.filter((row) => {
                    return convertToBoolean(row['North Pacific']) === convertToBoolean(this.state.northPacific);
                });
            }
    
            if (this.state.southPacific !== '') {
                filteredData = filteredData.filter((row) => {
                    return convertToBoolean(row['South Pacific']) === convertToBoolean(this.state.southPacific);
                });
            }
    
            return (
                <React.Fragment>
                    <Filters
                        subSpecies={this.state.subSpecies}
                        endangerment={this.state.endangerment}
                        growthRates={this.state.growthRates}
                        northAtlantic={this.state.northAtlantic}
                        southAtlantic={this.state.southAtlantic}
                        arctic={this.state.arctic}
                        indian={this.state.indian}
                        northPacific={this.state.northPacific}
                        southPacific={this.state.southPacific}
                        updateFormState={this.updateFormState}
                    />
                    <hr />
                    <DataTable
                        dataToDisplay={filteredData}
                    />
                </React.Fragment>
            );
        }
    }
    
    const sharkData = [ //change name and change the data
    {
        "Shark": "Whitefin Sharksucker",
        "Sub-Species": "None",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Live Sharksucker",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "Yes",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Tope",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "Yes",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Bluntnose Sixgill Shark",
        "Sub-Species": "None",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "Yes",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Nervous Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Blacktip Reef Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Portuguese Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Speartooth Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Megamouth Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Creek Whaler",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Blacktip Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Pacific Nurse Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Bonnethead Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Whitetip Reef Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Tiger Shark",
        "Sub-Species": "None",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Basking Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "Yes",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Grey Reef Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Horn Shark",
        "Sub-Species": "None",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Northern River Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Indonesian Angel Shark",
        "Sub-Species": "Angelshark",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Eastern Angel Shark",
        "Sub-Species": "Angelshark",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Black Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Velvet Belly Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "Yes",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Birdbeak Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Longnose Velvet Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "White Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Zebra Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Spiny Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Great Lanternshark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Spined Pygmy Shark",
        "Sub-Species": "Pygmyshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Caribbean Roughshark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Galapagos Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Graceful Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Whale Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Starry Smoothhound",
        "Sub-Species": "None",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Bull Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Scalloped Hammerhead",
        "Sub-Species": "Hammerhead",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "White Ghost Catshark",
        "Sub-Species": "Catshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Spotted Gully Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Porbeagle",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Great Hammerhead",
        "Sub-Species": "Hammerhead",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Blue Shark",
        "Sub-Species": "None",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Chilean Catshark",
        "Sub-Species": "Catshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Smooth Hammerhead",
        "Sub-Species": "Hammerhead",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Caribbean Reef Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Iceland Catshark",
        "Sub-Species": "Catshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Blackmouth Catshark",
        "Sub-Species": "Catshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "Yes",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Greenland Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "Yes",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Pyjama Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Increasing",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Nursehound",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Mouse Catshark",
        "Sub-Species": "Catshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "Yes",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Sand Tiger Shark",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Fleshynose Catshark",
        "Sub-Species": "Catshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Angular Roughshark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "Yes",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Broadnose Sevengill Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Atlantic Sixgill Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Sharpnose Sevengill Shark",
        "Sub-Species": "None",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Whitespotted Bullhead Shark",
        "Sub-Species": "None",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Bigeyed Sixgill Shark",
        "Sub-Species": "None",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Southern African Frilled Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Japanese Bullhead Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Mexican Horn Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Port jackson Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "African Dwarf Sawshark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Frilled Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "Yes",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Borneo Shark",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Blackmouth Lanternshark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Brown Lanternshark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Whitetail Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Marsha's Lanternshark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Lined Lanternshark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Whitecheek Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Blacknose Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Pacific Smalltail Shark",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Sherwoods Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Densescale Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Oman Bullhead Shark",
        "Sub-Species": "None",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Crested Horn Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Blurred Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Rasptooth Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Sparsetooth Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Green Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Increasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Broadnose Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Hawaiian Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Galapagos Bullhead Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Fatspine Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Phillipine Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Sandbar Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Pocket Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "West Indian Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Smiths Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Dusky Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Combtooth Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Indonesian Whaler Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Pink Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Barries Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Humans Whaler Shark",
        "Sub-Species": "None",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Lailas Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Ninja Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Dwarf Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Lemon Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Blind Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Prickly Shark",
        "Sub-Species": "None",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Short-tailed Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Black-tailed Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Highfin Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Pondicherry Shark",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Genies Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Least Concern",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Spadenose Shark",
        "Sub-Species": "None",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Edmunds Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Shortnose Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Least Concern",
        "Growth Rates": "Increasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Seychelles Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Bighead Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Shortfin Smooth Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Ganges Shark",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Silky Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Roughskin Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Undefined",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Southern Mandarin Shark",
        "Sub-Species": "None",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Eastern Highfin Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Copper Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Vari's Angel Shark",
        "Sub-Species": "Angelshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Carolina Hammerhead",
        "Sub-Species": "H",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Indonesian Shortnose Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Malagasi Skinny Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Brazilian Whitetail Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Atlantic Lobefin Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Thorny Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Smalleye Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Azores Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Sculpted Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Pygmy Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Traveller Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Papuan Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "New Spadenose Shark",
        "Sub-Species": "None",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "False Pygmy Shark",
        "Sub-Species": "Pygmyshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Night Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Greeneye Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Western Humpback Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Western Highfin Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Lost Shark",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Atlantic Sharpnose Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Increasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Shorttail Nurse Shark",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Seychelles Gulper Shark",
        "Sub-Species": "Gulpershark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Splendid Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Oceanic Whitetip Shark",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Lesser Sand Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Blackbelly Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Australian Blackspot Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Slendertail Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Eastern Longnose Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Western Longnose Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Kermadec Spiny Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Taiwan Angelshark",
        "Sub-Species": "Angelshark",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Ocellated Angelshark",
        "Sub-Species": "Angelshark",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Blackfin Gulper Shark",
        "Sub-Species": "Gulpershark",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Longfin Gulper Shark",
        "Sub-Species": "Gulpershark",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Hooktooth Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Mandarin Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Cylindrical Lantern Shark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Taiwan Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Bartail Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Baret'z Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Hawaiian Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Whitetip Weasel Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Cailliet's Angelshark",
        "Sub-Species": "Angelshark",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Australian Blacktip Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Australian Sharpnose Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Northeastern Brazillian Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Japanese Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Daggernose Shark",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Viper Dogfish",
        "Sub-Species": "Dogfish",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Western Angelshark",
        "Sub-Species": "Angelshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Australian Angelshark",
        "Sub-Species": "Angelshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Ornate Angel Shark",
        "Sub-Species": "Angelshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Longfin Mako",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Longnose Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Largetooth Sawfish",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Sickelfin Weasel Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Whitenose Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "African Longnose Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Western Gulper Shark",
        "Sub-Species": "Gulpershark",
        "Endangerment": "Data Deficient",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Australian Weasel Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Smalleye Pygmy Shark",
        "Sub-Species": "Pygmyshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Tailspot Lanternshark",
        "Sub-Species": "Lanternshark",
        "Endangerment": "Least Concern",
        "Growth Rates": "Undefined",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Chilean Angel Shark",
        "Sub-Species": "Angelshark",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "American Pocket Shark",
        "Sub-Species": "None",
        "Endangerment": "Least Concern",
        "Growth Rates": "Stable",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "African Gulper Shark",
        "Sub-Species": "Gulpershark",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Great White Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Bonnethead Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Winghead Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Scoophead Shark",
        "Sub-Species": "None",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Scalloped Bonnethead",
        "Sub-Species": "Hammerhead",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Smalleye Hammerhead",
        "Sub-Species": "Hammerhead",
        "Endangerment": "Critically Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Silvertip Shark",
        "Sub-Species": "None",
        "Endangerment": "Vulnerable",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "No",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Bramble Shark",
        "Sub-Species": "None",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "Yes",
        "Indian": "No",
        "North Pacific": "No",
        "South Pacific": "No"
    },
    {
        "Shark": "Bluntnose Spurdog",
        "Sub-Species": "Spurdog",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "No",
        "North Pacific": "Yes",
        "South Pacific": "No"
    },
    {
        "Shark": "Spottail Shark",
        "Sub-Species": "None",
        "Endangerment": "Near Threatened",
        "Growth Rates": "Decreasing",
        "North Atlantic": "No",
        "South Atlantic": "No",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    {
        "Shark": "Little Gulper Shark",
        "Sub-Species": "Gulpershark",
        "Endangerment": "Endangered",
        "Growth Rates": "Decreasing",
        "North Atlantic": "Yes",
        "South Atlantic": "Yes",
        "Arctic": "No",
        "Indian": "Yes",
        "North Pacific": "Yes",
        "South Pacific": "Yes"
    },
    ];


    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={sharkData} />);
})();